# CHANNEL PERFORMANCE REVIEW — проверка роли коммуникационного канала

[[Methods/METHODS_OVERVIEW|← Methods Overview]]

## Method Definition

### Purpose

Проверить, выполняет ли канал назначенную ему роль в коммуникационной системе, используя доступные количественные и качественные сигналы. Метод связывает наблюдения с решением о роли канала, а не собирает vanity metrics ради отчёта.

### Categories

- Synthesis / Analysis
- Validation / Testing

### Use When

- у канала есть определённая роль в [[06_External/04_Channels|Channels]];
- накопился сопоставимый период материалов, контактов или аналитики;
- нужно решить: сохранить, изменить, ограничить или прекратить использование канала;
- количественные данные требуют содержательной интерпретации.

### Do Not Use When

- канал ещё не имеет назначенной роли или достаточного периода наблюдения;
- likes, reach или follower count используются как универсальный показатель успеха;
- корреляция объявляется причиной;
- недоступные данные заменяются нулём.

### Required Inputs

- каноническая роль канала и Role Check / Reconsider When;
- период, baseline или обоснованная точка сравнения;
- данные платформы, записи контактов, качественная обратная связь или иные сигналы;
- значимые изменения контента, алгоритма или внешнего контекста.

### Process

1. Зафиксировать проверяемую роль и решение, которое может измениться.
2. Выбрать сигналы, относящиеся именно к этой роли.
3. Собрать значения и наблюдения с источником, периодом и ограничениями.
4. Отметить события и изменения, влияющие на сравнимость.
5. Сформулировать finding, альтернативные объяснения и степень уверенности.
6. Обновить Audit observations и при необходимости пересмотреть роль в Channels.

### Limitations

- платформенные метрики определяются чужими алгоритмами и правилами;
- атрибуция между каналом и коммерческим результатом часто неполна;
- качественный сигнал может быть важным, но нерепрезентативным;
- privacy и согласие ограничивают допустимый сбор данных.

## Application Records

### CPR-ID — канал / период

- **Date / version:** …
- **Channel / canonical role:** ссылка на [[06_External/04_Channels|Channels]] — …
- **Project Question / possible decision:** …
- **Period / baseline / relevant changes:** …

| Signal / metric | Why it relates to role | Source / period | Value / observation | Interpretation | Limitation / alternative explanation |
|---|---|---|---|---|---|
| … | … | … | … | … | … |

#### Material / event annotations — если нужны

| Date / item / event | Change or context | Observed response | Relevance to role |
|---|---|---|---|
| … | … | … | … |

#### Review decision

| Role check | Finding | Confidence | Decision candidate | Reconsider when |
|---|---|---|---|---|
| … | … | … | Keep / change / narrow / stop / insufficient data | … |

- **Project Result:** …
- **Canonical Use:** фактические observations → [[01_Audit/03_Channels_Materials|Audit → Channels / Materials]]; принятое изменение роли → [[06_External/04_Channels|External → Channels]].
- **Status / next review:** …

## Статус универсальной карточки

- **Method Definition:** перерабатывает прежнюю Media Analytics в role-based review.
- **Application Records конкретного бренда:** отсутствуют.
