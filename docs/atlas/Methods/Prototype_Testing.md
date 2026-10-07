---
layout: default
title: "PROTOTYPE TESTING — проверка конкретного проявления или сценария"
---

[← Карта Atlas]({{ site.baseurl }}/) · [Исходник](https://github.com/farber-vs/responsible-control-brand-atlas/blob/main/brandatlas/Methods/Prototype_Testing.md)

# PROTOTYPE TESTING — проверка конкретного проявления или сценария

[← Methods Overview]({{ site.baseurl }}/atlas/Methods/METHODS_OVERVIEW.html)

## Method Definition

### Purpose

Проверить, может ли человек понять, использовать или пройти конкретное проявление, интерфейс, материал либо сервисный сценарий до финализации и внедрения.

### Categories

- Service / Experience
- Validation / Testing

### Use When

- существует прототип достаточной fidelity для конкретного вопроса;
- нужно наблюдать выполнение задачи, переход, понимание или реакцию на взаимодействие;
- ошибка проявления может быть исправлена до production;
- Service Journey, Visual / Verbal Identity или другой модуль нуждается в проверке применения.

### Do Not Use When

- вопрос относится к общей жизнеспособности системы на разных нагрузках — для этого используется [System Stress Test]({{ site.baseurl }}/atlas/Methods/System_Stress_Test.html);
- статичный mockup выдаётся за работающий опыт без объяснения ограничений;
- участнику подсказывают правильное действие до наблюдения проблемы;
- успешное выполнение одной задачи объявляется рыночной валидацией продукта.

### Required Inputs

- prototype, версия и честное описание fidelity;
- user / participant, контекст и конкретные tasks;
- связанные канонические rules / expected behavior;
- pre-set success criteria, observation protocol и consent.

### Process

1. Зафиксировать prototype claim и вопросы, которые эта fidelity способна проверить.
2. Сформулировать реалистичные tasks без подсказки решения.
3. Наблюдать действия, ошибки, обходные пути, вопросы и переходы.
4. После задачи уточнить понимание и причины, не заменяя наблюдение мнением.
5. Отделить дефект прототипа от дефекта канонического правила или сервисной логики.
6. Оценить severity и повторяемость проблемы с ограничениями выборки.
7. Исправить проявление либо вернуть изменение в канонический модуль и провести retest.

### Limitations

- поведение с прототипом отличается от реального контекста и длительного использования;
- fidelity ограничивает выводы;
- участник теста не представляет автоматически всю аудиторию;
- prototype test не доказывает спрос, экономический эффект или устойчивость всей системы.

## Application Records

### PT-ID — прототип / раунд

- **Date / version:** …
- **Prototype / location / fidelity:** …
- **Project Question / canonical rules under test:** …
- **Participants / context / recruitment:** …
- **Tasks / pre-set success criteria:** …

#### Session record

| Task / participant | Observed path | Completion / result | Error / hesitation / workaround | Quote / behavior evidence | Facilitator intervention | Limitation |
|---|---|---|---|---|---|---|
| … | … | … | … | … | … | … |

#### Issue and decision log

| Issue | Supporting sessions | Severity / consequence | Prototype defect or system question | Revision | Owner / canonical destination | Retest |
|---|---|---|---|---|---|---|
| … | … | … | … | … | Service Journey / Visual Identity / Verbal Identity / other: … | Yes / no / unknown |

- **Project Result:** …
- **What the test does not establish:** …
- **Status / next step:** …

## Граница со System Stress Test

Prototype Testing наблюдает конкретное взаимодействие или выполнение задачи человеком. [System Stress Test]({{ site.baseurl }}/atlas/Methods/System_Stress_Test.html) проверяет, выдерживает ли система набор типичных и предельных нагрузок по её правилам; он может выполняться без участников. Один проект может использовать оба метода, но их evidence и выводы не смешиваются.

## Статус универсальной карточки

- **Method Definition:** восстановлен из панели Methods v7.
- **Application Records конкретного бренда:** отсутствуют.

