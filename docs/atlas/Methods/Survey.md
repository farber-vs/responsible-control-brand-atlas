---
layout: default
title: "SURVEY — стандартизированный сбор ответов"
---

[← Карта Atlas]({{ site.baseurl }}/) · [Исходник](https://github.com/farber-vs/responsible-control-brand-atlas/blob/main/brandatlas/Methods/Survey.md)

# SURVEY — стандартизированный сбор ответов

[← Methods Overview]({{ site.baseurl }}/atlas/Methods/METHODS_OVERVIEW.html)

## Method Definition

### Purpose

Получить сопоставимые ответы на заранее определённые вопросы у обоснованной выборки, чтобы оценить распространённость, распределение или различия уже сформулированных наблюдений и гипотез.

### Categories

- Research
- Validation / Testing

### Use When

- вопрос можно выразить через понятные и одинаково интерпретируемые переменные;
- качественное исследование уже помогло определить язык и возможные варианты ответа;
- размер и способ набора выборки позволяют получить полезное сравнение;
- нужно проверить распространённость конкретного паттерна, а не открыть неизвестное с нуля.

### Do Not Use When

- проблема ещё плохо определена и требует открытого разговора или наблюдения;
- доступна только случайная малая группа, но результат планируется обобщить на весь рынок;
- наводящие вопросы используются для подтверждения желаемого решения;
- проценты должны создать видимость точности без sampling logic и описания покрытия.

### Required Inputs

- Project Question и решения, которые могут измениться;
- определённая population / target group и способ набора;
- проверенные формулировки вопросов и вариантов ответа;
- план анализа, privacy / consent и условия хранения данных.

### Process

1. Перевести Project Question в измеримые вопросы и заранее определить план анализа.
2. Описать population, sampling / recruitment и ограничения охвата.
3. Собрать короткую анкету без двойных, наводящих и неоднозначных вопросов.
4. Провести pilot и исправить ошибки понимания до основного запуска.
5. Собрать ответы, сохраняя период, канал, completion и правила очистки.
6. Проанализировать распределения и различия вместе с неопределённостью и bias.
7. Сформулировать ограниченные findings и связать их с каноническими разделами.

### Limitations

- стандартизированный ответ теряет часть контекста и причин;
- self-selection, non-response и recruitment bias могут существенно искажать результат;
- непробабилистическая выборка не поддерживает автоматическое обобщение на population;
- корреляция ответов не доказывает причинность или фактическое поведение.

## Application Records

### SURV-ID — вопрос / волна

- **Date / version:** …
- **Project Question / decisions affected:** …
- **Population / inclusion criteria:** …
- **Sampling / recruitment:** …
- **Collection period / channel:** …
- **Privacy / consent / data location:** …

#### Questionnaire map

| Question ID / wording | Response type | What it measures | Why needed | Risk / pilot finding |
|---|---|---|---|---|
| … | Single / multiple / scale / rank / open / other | … | … | … |

#### Sample and quality

| Invited / reached | Started | Completed | Excluded and rule | Coverage / known bias | Weighting — if justified |
|---|---|---|---|---|---|
| … | … | … | … | … | … |

#### Results

| Question / comparison | Result | Base / denominator | Uncertainty / limitation | Interpretation | Canonical Use |
|---|---|---|---|---|---|
| … | … | … | … | … | Audience / Market / Synthesis / Validation / other: … |

- **Open-response coding / linked material — if used:** …
- **Project Result:** …
- **What the survey does not establish:** …
- **Status / next step:** …

## Граница владения

Survey хранит instrument, sample, raw-result references и ограниченные findings. Нормализованное знание об аудитории, рынке или проверяемом решении принадлежит соответствующему каноническому разделу и ссылается на конкретную волну.

## Статус универсальной карточки

- **Method Definition:** восстановлен из панели Methods v7.
- **Application Records конкретного бренда:** отсутствуют.

