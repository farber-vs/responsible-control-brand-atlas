# SENTIMENT ANALYSIS — кодирование оценочной тональности

[[Methods/METHODS_OVERVIEW|← Methods Overview]]

## Method Definition

### Purpose

Последовательно кодировать оценочную тональность текстового корпуса и связать её с темами, источниками и контекстом. Метод может дополнять Review Analysis или Listening, но не заменяет содержательное чтение.

### Categories

- Synthesis / Analysis
- Validation / Testing

### Use When

- существует достаточно однородный corpus и полезно сравнить valence между темами, периодами или группами;
- правила кодирования можно определить и проверить;
- требуется увидеть не только общий знак, но и триггеры реакции.

### Do Not Use When

- малый разнотипный корпус превращается в псевдоточную статистику;
- sarcasm, mixed sentiment или язык не поддерживаются схемой;
- positive / neutral / negative выдаются за полный эмоциональный профиль;
- автоматический classifier применяется без проверки на конкретном corpus.

### Required Inputs

- corpus с source metadata;
- unit of analysis и coding scheme;
- язык, темы и правила mixed/unclear cases;
- при автоматизации — модель, версия и validation sample.

### Process

1. Определить единицу: упоминание, предложение, аспект или тема.
2. Составить codebook с примерами и пограничными случаями.
3. Закодировать pilot sample и уточнить правила.
4. Выполнить кодирование, сохраняя uncertain/mixed.
5. При нескольких кодировщиках проверить согласованность в достаточной для задачи форме.
6. Анализировать распределение вместе с темой и контекстом.

### Limitations

- valence зависит от объекта оценки и контекста;
- нейтральность может означать смешанную или неясную позицию;
- частота не равна важности;
- вывод ограничен corpus, языком и coding scheme.

## Application Records

### SENT-ID — corpus / период

- **Date / version:** …
- **Project Question / corpus reference:** …
- **Unit / language / codebook:** …
- **Manual / automated procedure and validation:** …

| Unit ID | Text / aspect | Topic | Sentiment code | Intensity — if used | Rationale / uncertainty | Source |
|---|---|---|---|---|---|---|
| … | … | … | Positive / neutral / negative / mixed / unclear / custom: … | … | … | … |

#### Distribution and triggers

| Segment / topic / period | Distribution | Recurring triggers | Counterexamples | Coverage limitation |
|---|---|---|---|---|
| … | … | … | … | … |

#### Findings

| Finding | Evidence | What it does not prove | Canonical Use / next check |
|---|---|---|---|
| … | … | … | Audit, Audience, Synthesis или другое: … |

- **Status:** …

## Статус универсальной карточки

- **Method Definition:** согласован в составе библиотеки.
- **Application Records конкретного бренда:** отсутствуют.
