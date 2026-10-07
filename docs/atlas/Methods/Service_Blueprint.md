---
layout: default
title: "SERVICE BLUEPRINT — карта видимого и внутреннего устройства сервиса"
---

[← Карта Atlas]({{ site.baseurl }}/) · [Исходник](https://github.com/farber-vs/responsible-control-brand-atlas/blob/main/brandatlas/Methods/Service_Blueprint.md)

# SERVICE BLUEPRINT — карта видимого и внутреннего устройства сервиса

[← Methods Overview]({{ site.baseurl }}/atlas/Methods/METHODS_OVERVIEW.html)

## Method Definition

### Purpose

Развернуть конкретный путь взаимодействия в связанную модель действий человека, frontstage, backstage, поддерживающих процессов, систем и evidence, чтобы увидеть операционные зависимости и условия реализации обещанного опыта.

### Categories

- Synthesis / Analysis
- Service / Experience
- Validation / Testing

### Use When

- CJM или Service Journey уже показывает последовательность опыта, но не объясняет, что должно происходить за видимой частью;
- несколько ролей, систем или подрядчиков зависят друг от друга;
- разрыв опыта может возникать во внутреннем процессе;
- целевой сценарий необходимо проверить на реализуемость перед внедрением.

### Do Not Use When

- достаточно описать простой путь без существенной внутренней координации;
- неизвестный текущий процесс дорисовывается как факт;
- подробная операционная карта создаётся без решения, которое она должна поддержать;
- blueprint заменяет регламент, техническую спецификацию или ответственность владельцев процессов.

### Required Inputs

- выбранный scenario / journey и его границы;
- текущая [Customer Journey Map]({{ site.baseurl }}/atlas/Methods/Customer_Journey_Map.html) или целевой [Service Journey]({{ site.baseurl }}/atlas/05_Service_System/03_Service_Journey.html);
- участники, роли, системы, физические или цифровые evidence;
- сведения о текущем процессе либо согласованные целевые решения.

### Process

1. Зафиксировать сценарий, человека, начало, конец и current / target mode.
2. Разложить путь на значимые этапы и действия человека.
3. Для каждого этапа описать frontstage, backstage и supporting processes.
4. Связать роли, системы, evidence, handoffs и точки ожидания.
5. Отметить наблюдаемое, предлагаемое, неизвестное и критические зависимости.
6. Найти failure points, bottlenecks и условия реализации.
7. Передать стратегические изменения в Service System, а операционные задачи — в соответствующий Output или рабочую систему.

### Limitations

- blueprint быстро устаревает при изменении процессов и ролей;
- целевая схема доказывает логическую связность, но не фактическую работоспособность;
- слишком подробная карта скрывает ключевые зависимости;
- метод не заменяет техническое проектирование, workload planning или юридическую проверку.

## Application Records

### SBP-ID — сценарий / версия

- **Date / version:** …
- **Project Question:** …
- **Scenario / person / start–end boundary:** …
- **Mode:** current observed / target designed / comparison — …
- **Inputs / participants / missing views:** …

#### Blueprint

| Stage | Person action / need | Frontstage action | Backstage action | Supporting process / system | Physical or digital evidence | Handoff / wait / dependency | Evidence / status |
|---|---|---|---|---|---|---|---|
| … | … | … | … | … | … | … | Observed / reported / proposed / unknown: … |

#### Failure and feasibility review

| Failure point / dependency | Consequence for experience | Cause / owner hypothesis | Existing control | Required change / test | Canonical or operational destination |
|---|---|---|---|---|---|
| … | … | … | … | … | Service Journey / Interaction Principles / Roadmap / other: … |

- **Project Result:** …
- **Result limitations:** …
- **Status / next step:** …

## Граница владения

Service Blueprint хранит рабочую карту взаимозависимостей. [Service Journey]({{ site.baseurl }}/atlas/05_Service_System/03_Service_Journey.html) остаётся каноническим владельцем целевого опыта и переходов, [Interaction Principles]({{ site.baseurl }}/atlas/05_Service_System/02_Interaction_Principles.html) — правил поведения, а операционные задачи и owners могут передаваться через [Outputs]({{ site.baseurl }}/atlas/Outputs/OUTPUTS_OVERVIEW.html).

## Статус универсальной карточки

- **Method Definition:** восстановлен из панели Methods v7.
- **Application Records конкретного бренда:** отсутствуют.

