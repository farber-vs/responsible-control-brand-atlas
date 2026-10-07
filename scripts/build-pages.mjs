import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, "brandatlas");
const outputRoot = path.join(root, "docs");
const atlasOutput = path.join(outputRoot, "atlas");
const repoUrl = "https://github.com/farber-vs/responsible-control-brand-atlas";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  }));
  return nested.flat();
}

const files = (await walk(sourceRoot))
  .filter((file) => file.endsWith(".md"))
  .sort((a, b) => a.localeCompare(b, "ru"));

const raw = new Map();
for (const file of files) {
  const relative = path.relative(sourceRoot, file).replaceAll(path.sep, "/").replace(/\.md$/, "");
  raw.set(relative, await readFile(file, "utf8"));
}

function resolveTarget(fromPath, target) {
  const clean = target.replace(/\.md$/, "");
  if (raw.has(clean)) return clean;
  const sibling = path.posix.normalize(path.posix.join(path.posix.dirname(fromPath), clean));
  return raw.has(sibling) ? sibling : clean;
}

function extractBlock(targetPath, blockId) {
  const source = raw.get(targetPath);
  if (!source) return "";
  const lines = source.split("\n");
  const index = lines.findIndex((line) => line.trim() === `^${blockId}`);
  if (index < 0) return "";
  let start = index - 1;
  while (start >= 0 && lines[start].trim() !== "") start -= 1;
  return lines.slice(start + 1, index).join("\n");
}

function convert(source, pagePath) {
  let result = source.replace(/^---\n[\s\S]*?\n---\n/, "");

  result = result.replace(/!\[\[([^\]#]+)#\^([^\]]+)\]\]/g, (_match, file, block) => {
    const target = resolveTarget(pagePath, file.trim());
    return extractBlock(target, block.trim());
  });

  result = result.replace(/\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g, (_match, file, heading, alias) => {
    const target = resolveTarget(pagePath, file.trim());
    const label = (alias || file.split("/").at(-1)).replaceAll("_", " ");
    const anchor = heading ? `#${heading.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "")}` : "";
    return `[${label}]({{ site.baseurl }}/atlas/${target}.html${anchor})`;
  });

  result = result.replace(/\[([^\]]+)\]\((\.\.\/[^)]+|[^h#][^)]+\.md)\)/g, (_match, label, href) => {
    const clean = href.replace(/^\.\.\//, "");
    return `[${label}](${repoUrl}/blob/main/${clean})`;
  });

  return result.replace(/^\^[-\w]+$/gm, "");
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(atlasOutput, { recursive: true });

const sections = new Map();
for (const [pagePath, source] of raw) {
  const output = path.join(atlasOutput, `${pagePath}.md`);
  await mkdir(path.dirname(output), { recursive: true });
  const title = source.match(/^#\s+(.+)$/m)?.[1]?.trim() || pagePath.split("/").at(-1);
  const section = pagePath.includes("/") ? pagePath.split("/")[0] : "Overview";
  const body = convert(source, pagePath);
  await writeFile(output, `---\nlayout: default\ntitle: "${title.replaceAll('"', "\\\"")}"\n---\n\n[← Карта Atlas]({{ site.baseurl }}/) · [Исходник](${repoUrl}/blob/main/brandatlas/${pagePath}.md)\n\n${body}\n`);
  if (!sections.has(section)) sections.set(section, []);
  sections.get(section).push({ pagePath, title });
}

const sectionOrder = [
  "Overview", "00_Brief", "01_Audit", "02_Research", "03_Core",
  "04_Positioning", "05_Service_System", "06_External", "Platform", "Outputs", "Methods"
];
const sectionNames = {
  Overview: "Обзор",
  "00_Brief": "00 · Brief",
  "01_Audit": "01 · Audit",
  "02_Research": "02 · Research",
  "03_Core": "03 · Core",
  "04_Positioning": "04 · Positioning",
  "05_Service_System": "05 · Service System",
  "06_External": "06 · External",
  Platform: "Brand Platform",
  Outputs: "Outputs",
  Methods: "Methods"
};

let map = "";
for (const section of sectionOrder) {
  const pages = sections.get(section);
  if (!pages) continue;
  map += `\n## ${sectionNames[section] || section}\n\n`;
  for (const page of pages) {
    map += `- [${page.title}]({{ site.baseurl }}/atlas/${page.pagePath}.html)\n`;
  }
}

await writeFile(path.join(outputRoot, "_config.yml"), `title: Responsible Control — Brand Atlas
description: Ясность без давления. Бренд-, информационная и сервисная система регулируемого доступа.
theme: jekyll-theme-minimal
lang: ru
markdown: kramdown
repository: farber-vs/responsible-control-brand-atlas
show_downloads: true
exclude:
  - README.md
`);

await writeFile(path.join(outputRoot, "index.md"), `---
layout: default
title: Responsible Control — Brand Atlas
---

# Responsible Control — Brand Atlas

Каноническая карта общественного протокола информации и регулируемого доступа к психоактивным продуктам.

> **Ясность без давления.** Не стимулировать употребление, не скрывать значимую информацию и не стигматизировать человека.

- [Открыть обзор Atlas]({{ site.baseurl }}/atlas/ATLAS_OVERVIEW.html)
- [Открыть Brand Platform]({{ site.baseurl }}/atlas/Platform/BRAND_PLATFORM.html)
- [Исходный репозиторий](${repoUrl})

Версия \`v0.2-atlas\`. Это концептуальный MVP, а не юридический или медицинский стандарт.

${map}
`);

console.log(JSON.stringify({ pages: raw.size, output: outputRoot }));
