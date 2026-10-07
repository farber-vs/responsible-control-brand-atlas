# SYSTEM STRESS TEST — проверка системы на представительных нагрузках

[[Methods/METHODS_OVERVIEW|← Methods Overview]]

## Method Definition

### Purpose

Проверить, сохраняет ли спроектированная визуальная, вербальная, сервисная или иная система узнаваемость, функцию и собственные правила при смене контекста, масштаба, содержания и ограничений.

### Categories

- Validation / Testing

### Use When

- система описана правилами, но ещё не доказала способность порождать разные проявления;
- нужно проверить инварианты, переменные, edge cases и ограничения до передачи;
- proof compositions или prototypes могут выявить дефекты генеративной грамматики;
- новая версия системы существенно меняет правила.

### Do Not Use When

- тестируются только заранее удобные и декоративные примеры;
- мокап выдаётся за реальную эксплуатацию;
- критерии успеха формулируются после просмотра результата;
- один удачный пример объявляется доказательством универсальности.

### Required Inputs

- конкретная система и её версия;
- заявленные invariants, variables, rules и functional constraints;
- представительный набор обычных, предельных и конфликтных условий;
- критерии pass / partial / fail, заданные до теста.

### Process

1. Зафиксировать system claim и версию.
2. Собрать load matrix: типичные случаи, крайние значения, ограничения и намеренные конфликты.
3. Назначить критерии узнаваемости, функции, доступности и соответствия правилам.
4. Создать proof composition, prototype или провести реальное применение; явно различать эти типы evidence.
5. Записать результат каждого теста, дефект и предел вывода.
6. Исправить систему или уточнить её границы; провести повторный тест при существенном изменении.

### Limitations

- proof composition проверяет возможность, но не доказывает качество массовой эксплуатации;
- набор нагрузок всегда ограничен;
- эстетическое суждение требует сформулированных критериев и ответственного автора;
- успешный stress test не гарантирует рыночный эффект.

## Application Records

### SST-ID — система / версия

- **Date / version:** …
- **System under test / canonical link:** …
- **Claim being tested:** …
- **Test type:** proof composition / prototype / controlled use / real application — …
- **Predefined pass criteria:** …

#### Load matrix and results

| Case / load | Why representative | Input / constraint | Expected invariant / function | Evidence / artifact | Result | Defect / limitation |
|---|---|---|---|---|---|---|
| … | … | … | … | … | Pass / partial / fail / not tested | … |

#### Cross-case diagnosis

| Rule / subsystem | What held | What broke | Root-cause hypothesis | Revision / boundary | Retest required |
|---|---|---|---|---|---|
| … | … | … | … | … | Yes / no / unknown |

- **Project Result:** …
- **Evidence class:** planned example / proof composition / prototype / real application — …
- **Canonical Use:** изменение нормы и итоговый validation result записываются в проверяемом модуле; например, визуальный stress test → [[06_External/03_Visual_Identity|Visual Identity]].
- **Status / retest:** …

## Граница владения

Метод хранит процедуру, load matrix и application evidence. Проверяемая система хранит свою действующую норму и краткий итог validation со ссылкой на этот record. Outputs может передавать готовые proof materials, но не становится источником истины.

## Статус универсальной карточки

- **Method Definition:** согласован в составе библиотеки.
- **Application Records конкретного бренда:** отсутствуют.
