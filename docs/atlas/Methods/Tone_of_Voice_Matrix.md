---
layout: default
title: "TONE OF VOICE MATRIX — перевод характера в проверяемую модель голоса"
---

[← Карта Atlas]({{ site.baseurl }}/) · [Исходник](https://github.com/farber-vs/responsible-control-brand-atlas/blob/main/brandatlas/Methods/Tone_of_Voice_Matrix.md)

# TONE OF VOICE MATRIX — перевод характера в проверяемую модель голоса

[← Methods Overview]({{ site.baseurl }}/atlas/Methods/METHODS_OVERVIEW.html)

## Method Definition

### Purpose

Перевести характер бренда и коммуникационные задачи в систему речевых инвариантов, изменяемых параметров, границ и примеров, а затем проверить её в разных ситуациях, каналах и языках.

### Categories

- Strategy
- Validation / Testing

### Use When

- характер бренда понятен, но тексты звучат непоследовательно;
- необходимо отделить устойчивый голос от ситуативного тона;
- команда работает в нескольких языках, каналах или уровнях формальности;
- [Verbal Identity]({{ site.baseurl }}/atlas/06_External/02_Verbal_Identity.html) требует проверяемых правил и примеров.

### Do Not Use When

- матрица должна создать искусственного персонажа вместо реального характера;
- общие прилагательные записываются без наблюдаемых речевых признаков;
- одинаковый тон навязывается всем контекстам;
- примеры копируют чужой голос или заменяют правило.

### Required Inputs

- Core, Positioning и Messaging;
- реальные образцы текущей речи и данные аудита, если они существуют;
- перечень значимых контекстов, языков и авторов текста.

### Process

1. Собрать образцы и отделить устойчивые признаки от случайных особенностей.
2. Сформулировать инварианты через конструкцию «качество, но не его нежелательная крайность».
3. Описать наблюдаемые лексические, синтаксические и композиционные признаки.
4. Определить параметры, которые меняются по контексту, каналу и языку.
5. Создать тестовые тексты и counterexamples для реальных сцен.
6. Проверить узнаваемость, ясность, уместность и сохранение смысла; принятые нормы перенести в Verbal Identity.

### Limitations

- матрица не способна полностью формализовать живую речь;
- языковая адаптация требует проверки носителями и контекстом, а не буквального перевода шкал;
- сходство текста с правилами не гарантирует доверия или эффективности;
- голос может закономерно развиваться и требует версионирования.

## Application Records

### TOV-ID — версия / набор контекстов

- **Date / version:** …
- **Project Question:** …
- **Source samples / languages / contexts:** …
- **Missing evidence:** …

#### Voice characteristics

| Quality / invariant | But not | Observable markers | Counterexample | Evidence / rationale |
|---|---|---|---|---|
| … | … | Vocabulary, syntax, rhythm, stance: … | … | … |

#### Variable parameters

| Context / channel / language | Formality | Emotional intensity | Density / length | Terminology / person | What must remain invariant |
|---|---|---|---|---|---|
| … | … | … | … | … | … |

#### Speech principles and tests

| Rule | Do example | Don’t example | Test scene | Result / revision |
|---|---|---|---|---|
| … | … | … | … | Pass / partial / fail / not tested: … |

- **Project Result:** …
- **Canonical Use:** принятые инварианты, параметры, language rules и examples → [Verbal Identity]({{ site.baseurl }}/atlas/06_External/02_Verbal_Identity.html).
- **Limitations / unresolved contexts:** …
- **Status / next test:** …

## Граница владения

Метод хранит анализ, варианты и тесты. Verbal Identity хранит действующую модель голоса. [Messaging]({{ site.baseurl }}/atlas/06_External/01_Messaging.html) по-прежнему отвечает за то, что бренд сообщает, а не за способ выражения.

## Статус универсальной карточки

- **Method Definition:** согласован в составе библиотеки.
- **Application Records конкретного бренда:** отсутствуют.

