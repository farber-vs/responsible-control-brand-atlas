---
layout: default
title: "METHODS — библиотека методов и проектных применений"
---

[← Карта Atlas]({{ site.baseurl }}/) · [Исходник](https://github.com/farber-vs/responsible-control-brand-atlas/blob/main/brandatlas/Methods/METHODS_OVERVIEW.md)

# METHODS — библиотека методов и проектных применений

## Применение в Responsible Control

Пустые Application Records в отдельных методах — формы будущих исследований, а не незаполненные разделы бренда.

| Метод | Применение | Статус / канонический выход |
|---|---|---|
| Desk Research | Четыре отчёта и прецеденты | Завершено → [03 Domain Research]({{ site.baseurl }}/atlas/02_Research/03_Domain_Research.html) |
| Visual Research | Plain packaging, public retail, anti-patterns | Завершено для MVP → [04 Visual Research]({{ site.baseurl }}/atlas/02_Research/04_Visual_Research.html) |
| Insight Synthesis | Regulation + retail + service + identity | Завершено → [05 Synthesis]({{ site.baseurl }}/atlas/02_Research/05_Synthesis.html) |
| Stakeholder Mapping | Девять групп и роли | Гипотеза → [01 Audience]({{ site.baseurl }}/atlas/02_Research/01_Audience.html) |
| Service Blueprint | Путь от порога до помощи | Гипотеза → [03 Service Journey]({{ site.baseurl }}/atlas/05_Service_System/03_Service_Journey.html) |
| System Stress Test | Anti-Brand Test и три контрольные среды | Запланировано → `Documentation/06_Anti_Brand_Test.md` |
| Prototype Testing | Понимание, давление, dignity, privacy, accessibility | Запланировано → `Documentation/16_Metrics_and_Testing.md` |

Результаты не дублируются в универсальных формах: канонические выводы находятся в Atlas, evidence — в `Research/`, протоколы — в `Documentation/`.

## Назначение

Methods — системная панель вне пространственной карты Brand Atlas. Она хранит воспроизводимые способы работы, evidence и конкретные результаты их применения. Методы могут обслуживать Audit, Research, Core, Positioning, Service System, External и проверки готовых решений, поэтому не принадлежат одному этапу по умолчанию.

Метод не равен обязательному шагу проекта. Его выбирают под конкретный вопрос, доступные основания и требуемую степень уверенности. Универсальный вольт может содержать широкую библиотеку, но конкретный бренд использует только релевантные методы.

## Владение информацией и прослеживаемость

Одна страница метода содержит два слоя:

1. **Method Definition** — стабильную инструкцию и границы метода.
2. **Application Records** — конкретные применения метода в текущем проекте.

Результат применения и evidence остаются вместе с методом. Канонические разделы Atlas хранят собственные нормализованные findings и решения со ссылкой на соответствующее применение, а не копируют весь рабочий результат.

Прослеживаемость читается в обе стороны:

`решение → канонический вывод → Application Record → метод → evidence`

Поле `Canonical Use` означает, какие канонические разделы используют конкретный результат. Оно не даёт методу права записывать данные вместо Audience, Market, Mission, Positioning или другого канонического раздела.

## Категории-фильтры

Категории помогают находить методы и не образуют обязательную последовательность или папочную иерархию. Один метод может относиться к нескольким категориям.

| Категория | Для чего используется |
|---|---|
| Research | Получение и структурирование нового материала о людях, поле, контексте или наблюдаемом явлении. |
| Synthesis / Analysis | Сопоставление, группировка и интерпретация доступных материалов. |
| Strategy | Формирование и проверка вариантов стратегического решения. |
| Service / Experience | Изучение и проектирование взаимодействия, пути и сервисного опыта. |
| Validation / Testing | Проверка гипотезы, системы, применения или критерия работоспособности. |

Категория не определяет, куда автоматически попадёт результат. Это задаётся конкретным Application Record и его связями.

## Выбор метода

Перед применением:

1. сформулировать проектный вопрос;
2. определить, какое знание или решение действительно требуется;
3. проверить доступные inputs, ограничения и достаточность метода;
4. выбрать минимально достаточный способ работы;
5. заранее обозначить, какой результат метод способен и не способен дать;
6. после применения связать только релевантные выводы с каноническими разделами.

Не применяем метод ради заполнения Atlas, создания видимости исследования или воспроизведения фиксированного pipeline. Несколько методов могут отвечать на один вопрос; один метод может работать на несколько разделов.

## Стандарт страницы метода

Каждый метод получает собственную страницу и удобную рабочую форму, соответствующую его механике. Общий стандарт обеспечивает порядок и provenance, но не заменяет SWOT матрицей интервью, интервью — таблицей CJM и так далее.

### Method Definition — стабильный слой

- **Purpose:** что метод позволяет сделать.
- **Categories:** один или несколько фильтров из списка выше.
- **Use When:** при каких вопросах и условиях метод полезен.
- **Do Not Use When:** когда метод не подходит или создаёт ложную уверенность.
- **Required Inputs:** минимальные данные, участники, материалы или доступы.
- **Process:** воспроизводимая процедура с необходимой глубиной.
- **Expected Form of Result:** какой рабочий результат способен дать метод.
- **Limitations:** что результат не доказывает и от чего зависит его качество.
- **Source / School:** происхождение, автор или признанный источник, если релевантно.

### Application Record — повторяемый слой

У одного метода может быть любое число применений. Каждое получает стабильный ID и не смешивается с соседними попытками.

#### APP-ID — название применения

- **Date / version:** …
- **Project Question:** на какой конкретный вопрос отвечаем — …
- **Scope:** группа, материал, период, ситуация или другая граница — …
- **Concrete Inputs:** ссылки на использованные материалы и участников — …
- **Executed Process / deviations:** что фактически сделано и чем отличается от базовой процедуры — …
- **Project Result:** результат в форме, подходящей этому методу — …
- **Evidence / Materials:** первичные записи, документы, изображения, данные и другие основания — …
- **Result Limitations:** предел вывода, пробелы и условия пересмотра — …
- **Canonical Use:** какой конкретный finding или вывод используется каким разделом Atlas — …
- **Status:** запланировано / выполняется / завершено / недостаточно данных / требует повторения / отменено — …
- **Next Step — если нужен:** …

Основная рабочая форма Application Record проектируется под конкретный метод. Перечень выше остаётся служебным каркасом: поля можно встроить в специализированные таблицы, карточки, карты или последовательность шагов без потери их функции.

## Каталог — навигационное представление

Каталог показывает доступные карточки и помогает фильтровать библиотеку. Он не является вторым источником статуса применений. При расхождении верен соответствующий Application Record; в будущем интерфейс Atlas может собирать этот view из карточек автоматически.

| Метод | Категории | Назначение | Applications / status — view | Ссылка |
|---|---|---|---|---|
| Affinity Mapping & Clustering | Synthesis / Analysis | Сгруппировать исходный материал и укрупнить группы, сохраняя provenance, неоднозначность и исключения. | Применений в универсальной форме нет. | [Affinity Mapping & Clustering]({{ site.baseurl }}/atlas/Methods/Affinity_Mapping_Clustering\.html) |
| Archetype Mapping | Synthesis / Analysis; Strategy | Проверить, помогает ли необязательная архетипическая линза удерживать характер, напряжение и риски бренда. | Применений в универсальной форме нет. | [Archetype Mapping]({{ site.baseurl }}/atlas/Methods/Archetype_Mapping\.html) |
| Category History | Research; Synthesis / Analysis | Восстановить исторические слои и изменения, продолжающие влиять на устройство категории. | Применений в универсальной форме нет. | [Category History]({{ site.baseurl }}/atlas/Methods/Category_History\.html) |
| Channel Performance Review | Synthesis / Analysis; Validation / Testing | Проверить, выполняет ли канал назначенную роль, не подменяя её vanity metrics. | Применений в универсальной форме нет. | [Channel Performance Review]({{ site.baseurl }}/atlas/Methods/Channel_Performance_Review\.html) |
| Competitive Communications Analysis | Research; Synthesis / Analysis | Сравнить сообщения, claims, proof, tone, formats и CTA конкурентов и альтернатив. | Применений в универсальной форме нет. | [Competitive Communications Analysis]({{ site.baseurl }}/atlas/Methods/Competitive_Communications_Analysis\.html) |
| Concept Testing | Research; Validation / Testing | Проверить самостоятельное понимание, релевантность, правдоподобие и нежелательные смыслы концепции. | Применений в универсальной форме нет. | [Concept Testing]({{ site.baseurl }}/atlas/Methods/Concept_Testing\.html) |
| Cultural Code Mapping | Research; Synthesis / Analysis | Сопоставить культурные значения, нормы, роли и конфликты с их контекстом и пределами применимости. | Применений в универсальной форме нет. | [Cultural Code Mapping]({{ site.baseurl }}/atlas/Methods/Cultural_Code_Mapping\.html) |
| Customer Journey Map | Research; Synthesis / Analysis; Service / Experience | Восстановить evidence-backed текущий путь человека, переходы, точки контакта и трение. | Применений в универсальной форме нет. | [Customer Journey Map]({{ site.baseurl }}/atlas/Methods/Customer_Journey_Map\.html) |
| Desk Research | Research | Найти, оценить и сопоставить существующие сведения по конкретному проектному вопросу. | Применений в универсальной форме нет. | [Desk Research]({{ site.baseurl }}/atlas/Methods/Desk_Research\.html) |
| Empathy Map | Synthesis / Analysis; Service / Experience | Свести данные о том, что человек говорит, делает, думает и чувствует, не смешивая evidence и интерпретацию. | Применений в универсальной форме нет. | [Empathy Map]({{ site.baseurl }}/atlas/Methods/Empathy_Map\.html) |
| Ethnographic Observation | Research; Service / Experience | Изучить фактические действия, среду, артефакты и обходные решения в естественном контексте. | Применений в универсальной форме нет. | [Ethnographic Observation]({{ site.baseurl }}/atlas/Methods/Ethnographic_Observation\.html) |
| Five Whys | Synthesis / Analysis | Проверить причинное объяснение через последовательное уточнение, evidence и альтернативные ветви. | Применений в универсальной форме нет. | [Five Whys]({{ site.baseurl }}/atlas/Methods/Five_Whys\.html) |
| Golden Circle | Synthesis / Analysis; Strategy | Проверить согласованность Why, How и What без подмены Mission, Values и Offer. | Применений в универсальной форме нет. | [Golden Circle]({{ site.baseurl }}/atlas/Methods/Golden_Circle\.html) |
| Insight Bridge | Synthesis / Analysis; Strategy | Сделать явным интерпретационный переход от research conclusions к кандидатам решений. | Применений в универсальной форме нет. | [Insight Bridge]({{ site.baseurl }}/atlas/Methods/Insight_Bridge\.html) |
| Insight Synthesis | Synthesis / Analysis | Сформировать ограниченные объясняющие insights из findings нескольких источников. | Применений в универсальной форме нет. | [Insight Synthesis]({{ site.baseurl }}/atlas/Methods/Insight_Synthesis\.html) |
| JTBD Interview | Research; Synthesis / Analysis | Реконструировать ситуацию прогресса, силы выбора, альтернативы, тревоги и желаемый результат. | Применений в универсальной форме нет. | [JTBD Interview]({{ site.baseurl }}/atlas/Methods/JTBD_Interview\.html) |
| Message Testing | Research; Validation / Testing | Проверить понимание, релевантность, credibility, различимость и границы конкретного сообщения. | Применений в универсальной форме нет. | [Message Testing]({{ site.baseurl }}/atlas/Methods/Message_Testing\.html) |
| Narrative Mapping | Research; Synthesis / Analysis; Strategy | Выявить существующие нарративы и проверить возможные narrative territories для Messaging. | Применений в универсальной форме нет. | [Narrative Mapping]({{ site.baseurl }}/atlas/Methods/Narrative_Mapping\.html) |
| Past Work Review | Research; Synthesis / Analysis | Реконструировать прошлую практику, роли, реализацию, evidence и предел доказательства кейсов. | Применений в универсальной форме нет. | [Past Work Review]({{ site.baseurl }}/atlas/Methods/Past_Work_Review\.html) |
| Perception Mapping | Research; Synthesis / Analysis; Validation / Testing | Сопоставить наблюдаемое восприятие с намеренным пониманием и определить разрывы. | Применений в универсальной форме нет. | [Perception Mapping]({{ site.baseurl }}/atlas/Methods/Perception_Mapping\.html) |
| Perceptual Map | Synthesis / Analysis; Strategy | Визуализировать воспринимаемые различия между объектами по существенным параметрам. | Применений в универсальной форме нет. | [Perceptual Map]({{ site.baseurl }}/atlas/Methods/Perceptual_Map\.html) |
| PEST Analysis | Research; Synthesis / Analysis; Strategy | Структурировать существенные политические, экономические, социальные и технологические факторы. | Применений в универсальной форме нет. | [PEST Analysis]({{ site.baseurl }}/atlas/Methods/PEST_Analysis\.html) |
| Pricing Corridor | Research; Synthesis / Analysis; Strategy | Описать ценовые диапазоны и модели оплаты сопоставимых предложений в выбранном Frame. | Применений в универсальной форме нет. | [Pricing Corridor]({{ site.baseurl }}/atlas/Methods/Pricing_Corridor\.html) |
| Prototype Testing | Service / Experience; Validation / Testing | Наблюдать, может ли человек понять и использовать конкретное проявление или сервисный сценарий. | Применений в универсальной форме нет. | [Prototype Testing]({{ site.baseurl }}/atlas/Methods/Prototype_Testing\.html) |
| Reference Collection | Research | Собрать прослеживаемый визуальный corpus с источником, контекстом, критерием отбора и правами. | Применений в универсальной форме нет. | [Reference Collection]({{ site.baseurl }}/atlas/Methods/Reference_Collection\.html) |
| Review Analysis | Research; Synthesis / Analysis | Исследовать темы, критерии, проблемы и язык людей в доступных отзывах. | Применений в универсальной форме нет. | [Review Analysis]({{ site.baseurl }}/atlas/Methods/Review_Analysis\.html) |
| Semi-Structured Interviews | Research | Получить подробные рассказы по единому набору тем с возможностью уточняющих вопросов. | Применений в универсальной форме нет. | [Semi-Structured Interviews]({{ site.baseurl }}/atlas/Methods/Semi_Structured_Interviews\.html) |
| Semiotic Analysis | Research; Synthesis / Analysis | Разобрать производство значений конкретными знаками в определённом культурном контексте. | Применений в универсальной форме нет. | [Semiotic Analysis]({{ site.baseurl }}/atlas/Methods/Semiotic_Analysis\.html) |
| Sentiment Analysis | Synthesis / Analysis; Validation / Testing | Последовательно кодировать оценочную тональность корпуса в связи с темой и контекстом. | Применений в универсальной форме нет. | [Sentiment Analysis]({{ site.baseurl }}/atlas/Methods/Sentiment_Analysis\.html) |
| Service Blueprint | Synthesis / Analysis; Service / Experience; Validation / Testing | Связать путь человека с frontstage, backstage, supporting processes, systems и evidence. | Применений в универсальной форме нет. | [Service Blueprint]({{ site.baseurl }}/atlas/Methods/Service_Blueprint\.html) |
| Social & Media Listening | Research; Validation / Testing | Собрать и проанализировать доступные органические упоминания с ограничениями покрытия. | Применений в универсальной форме нет. | [Social & Media Listening]({{ site.baseurl }}/atlas/Methods/Social_Media_Listening\.html) |
| Stakeholder Mapping | Research; Synthesis / Analysis; Service / Experience | Определить участников, влияние, отношения, конфликты и последствия проекта. | Применений в универсальной форме нет. | [Stakeholder Mapping]({{ site.baseurl }}/atlas/Methods/Stakeholder_Mapping\.html) |
| Story Mining | Research; Synthesis / Analysis; Strategy | Найти в реальных эпизодах повторяющиеся выборы, напряжения и meaning candidates. | Применений в универсальной форме нет. | [Story Mining]({{ site.baseurl }}/atlas/Methods/Story_Mining\.html) |
| Survey | Research; Validation / Testing | Получить стандартизированные ответы у обоснованной выборки и оценить конкретные распределения или различия. | Применений в универсальной форме нет. | [Survey]({{ site.baseurl }}/atlas/Methods/Survey\.html) |
| SWOT / TOWS | Synthesis / Analysis; Strategy | Сопоставить внутренние и внешние факторы и получить варианты действий для проверки и выбора. | Применений в универсальной форме нет. | [SWOT / TOWS]({{ site.baseurl }}/atlas/Methods/SWOT_TOWS\.html) |
| System Stress Test | Validation / Testing | Проверить систему на типичных и предельных нагрузках по заранее заданным критериям. | Применений в универсальной форме нет. | [System Stress Test]({{ site.baseurl }}/atlas/Methods/System_Stress_Test\.html) |
| Tone of Voice Matrix | Strategy; Validation / Testing | Перевести характер в инварианты, переменные, речевые правила и контекстные тесты. | Применений в универсальной форме нет. | [Tone of Voice Matrix]({{ site.baseurl }}/atlas/Methods/Tone_of_Voice_Matrix\.html) |
| Touchpoint Matrix | Synthesis / Analysis; Service / Experience; Validation / Testing | Сопоставить точки контакта по единым критериям, не создавая второй источник facts. | Применений в универсальной форме нет. | [Touchpoint Matrix]({{ site.baseurl }}/atlas/Methods/Touchpoint_Matrix\.html) |
| Trend Scan | Research; Synthesis / Analysis; Strategy | Выявить повторяющиеся сигналы изменения и оценить их зрелость и возможное влияние. | Применений в универсальной форме нет. | [Trend Scan]({{ site.baseurl }}/atlas/Methods/Trend_Scan\.html) |
| Value Proposition Canvas | Synthesis / Analysis; Strategy; Service / Experience | Проверить соответствие Jobs, Pains и Gains конкретным механизмам предложения. | Применений в универсальной форме нет. | [Value Proposition Canvas]({{ site.baseurl }}/atlas/Methods/Value_Proposition_Canvas\.html) |
| Visual Segmentation | Synthesis / Analysis | Сгруппировать визуальное поле по наблюдаемым признакам и устойчивым сочетаниям. | Применений в универсальной форме нет. | [Visual Segmentation]({{ site.baseurl }}/atlas/Methods/Visual_Segmentation\.html) |

Порядок каталога алфавитный и не задаёт pipeline. Карточки с несколькими категориями показаны один раз: категории работают как фильтры, а не как независимые копии метода.

Отдельная страница `Method Template` не является архитектурной сущностью. При необходимости технический шаблон копирования можно создать позднее, не меняя этот стандарт.

## Статус

- **Статус панели:** библиотека пересобрана и структурно проверена.
- **Карточки методов:** 41.
- **Application Records конкретного бренда:** отсутствуют; добавляются только при реальном применении выбранного метода.

