<!-- ppt-master-schema: design-spec/v1 -->
# 미국 금리와 금 가격 - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | us_rates_gold |
| Canvas Format | ppt169 (1280×720) |
| Page Count | 1 |
| Primary Language | ko-KR |
| Target Audience | 금리와 원자재를 기본적으로 아는 금융·투자 실무자와 경영진 |
| Communication Intent | 실질금리와 금 가격이 반대로 움직이는 원리를 설명함. 2022년 이후 이 관계가 약해진 원인과 2026년 현재 상황을 알리고, 금리 전망과 금 가격 전망을 함께 제시함 |
| Desired Audience Outcome | 금리 하나로 금 가격 방향을 판단하면 안 되고, 중앙은행 매입을 함께 봐야 한다는 점을 이해함 |
| Core Message / Ask / Action | 1997~2012년 금 가격과 실질금리의 상관계수는 -0.82였음. 2022년 이후 중앙은행이 3년 연속 1,000t 넘게 사들이면서 이 관계가 약해짐 |
| Delivery Context | 발표자가 회의에서 설명하는 1장 보고 장표. 회의 후 참고자료로도 배포 |
| Artifact Afterlife | 샘플·참고자료 보관 |
| Reading Mode | text |
| Content Strategy | balanced default (조사 내용을 유지하면서 장표 흐름에 맞게 재구성) |
| Design Style | ① 리서치 리포트형: 결론 선제시 + 데이터 저널리즘 지면 |
| AI Image Acquisition Path | not applicable |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — final Stage-2 proactive policy |
| Custom Animations | disabled — final Stage-2 proactive policy |
| Narration Audio | disabled — final Stage-2 proactive policy |
| Created Date | 2026-10-12 |

## II. Canvas Specification

| Property | Value |
| --- | --- |
| Format | PPT 16:9 |
| Dimensions | 1280 × 720 |
| viewBox | `0 0 1280 720` |
| Margins | 40 px left/right, 32 px top/bottom |
| Content Area | x 40–1240, y 32–688 |

## III. Visual Theme

### Theme Style

- **Mode**: custom
- **Mode References**: pyramid
- **Mode Behavior**: 제목이 결론 문장이고, 그 아래 원리 → 탈동조화 → 전망 순서로 근거 3개를 붙임. 모든 수치는 출처 줄로 뒷받침함
- **Visual style**: custom
- **Visual Style References**: data-journalism, editorial
- **Visual Style Behavior**: 흰 지면 위에 차트를 장표의 중심축으로 두고, 오른쪽 사이드바를 얇은 구분선으로 나눔. 카드 상자 대신 헤어라인과 키커, 큰 숫자로 위계를 만들고, 작은 막대 차트와 전망 표를 사이드바에 넣음. 금색은 금 가격과 핵심 수치에만, 파랑은 금리 계열에만 씀. 그림자·발광 없이 평면으로 처리하고 하단에 출처 줄을 둠
- **Theme**: 증권사 리서치 리포트 1면
- **Tone**: 차분하고 건조한 분석 톤

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | #FFFFFF | 지면 |
| Secondary background | #F5F3EE | 탈동조화 구간 음영, 전망 표 배경 |
| Primary | #1F2A44 | 제목, 키커, 축, 강조 텍스트 |
| Accent | #B8862B | 금 가격 계열, 핵심 수치 |
| Secondary accent | #5B7FA6 | 금리 계열 |
| Body text | #222222 | 본문 |
| Secondary text | #6B6B6B | 캡션, 축 라벨, 출처 |
| Divider | #D9D6CF | 헤어라인, 격자선 |

## IV. Typography System

### Font Plan

| Role | Character (Reference) | Primary | English if non-English | Fallback tail |
| --- | --- | --- | --- | --- |
| Title | 굵은 고딕, 단정한 결론 문장 | Malgun Gothic | Arial | sans-serif |
| Body | 중립 고딕, 수치 가독성 | Malgun Gothic | Arial | sans-serif |

- **Title stack**: "Malgun Gothic", Arial, sans-serif
- **Body stack**: "Malgun Gothic", Arial, sans-serif

### Font Size Hierarchy

| Purpose | Anchor Size (px) |
| --- | ---: |
| Body | 18 |
| Title | 30 |
| Subtitle | 20 |
| Annotation | 13 |
| Display | 40 |

## V. Layout Principles

### Deck-wide Direction

- **Hierarchy direction**: 결론 제목 → 왼쪽 이중축 차트 → 오른쪽 근거 3블록(원리·탈동조화·전망) → 하단 출처
- **Composition tendency**: 차트가 지면 폭의 약 60%를 차지하는 비대칭 2단. 오른쪽은 세로로 쌓인 사이드바
- **Cross-page continuity**: 단일 장표
- **Spacing posture**: dense
- **Spacing anchors**: page margin 40 / block gap 20 / column gutter 32 / corner radius 2 / body leading 1.4

## VI. Icon Usage Specification

- **Primary bundled library**: tabler-outline
- **Stroke Width**: 2

| Icon Path | Suitable Scenarios |
| --- | --- |
| icons/tabler-outline/scale.svg | 기회비용·원리 |
| icons/tabler-outline/building-bank.svg | 중앙은행 매입 |
| icons/tabler-outline/trending-up.svg | 전망 |
| icons/tabler-outline/calendar-stats.svg | 기준일·시점 |

## VII. Visualization Reference List

| Page | Family | Template | Usage |
| --- | --- | --- | --- |
| P01 | chart | dual_axis_line_chart | 2007~2025 금 연평균 가격과 10년물 명목금리 연평균을 별도 축으로 비교 |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## IX. Content Outline

### Part 1: 금리와 금 가격

#### Slide 01 - 미국 금리와 금 가격의 상관관계

- **Audience move**: 금리가 오르면 금이 내린다는 통념만 가진 상태 → 역관계의 원리, 2022년 이후 약해진 원인, 향후 금리·금 전망까지 한 장으로 파악한 상태
- **Relationships**: 실질금리 상승 → 금 보유 기회비용 증가 (link); 2007~2021 역관계와 2022~2025 동반 상승 (contrast); 중앙은행 매입 확대 → 탈동조화 (link); 원리 → 탈동조화 → 전망 (order)
- **Composition**: 왼쪽 넓은 이중축 차트에 2022년 이후 음영 구간과 실질금리 시점 주석, 오른쪽 사이드바 3블록, 하단 출처 줄
- **Title**: 금은 실질금리와 반대로 움직여 왔으나, 2022년 이후 중앙은행 매입으로 연결이 약해짐
- **Core message**: 금리만으로 금 방향을 판단하기 어렵고 중앙은행 매입을 함께 봐야 함
- **Content**:
  - 키커: 미국 금리와 금 가격 · 기준일 2026.10.12
  - 차트: 금 연평균(USD/oz)과 10년물 명목금리 연평균(%) 2007~2025; 2022~2025 음영 '탈동조화'; 실질금리 주석 2020.7 -0.93% / 2023.8 2% 돌파 / 2026.10.8 2.87%
  - 원리: 금은 이자가 없어 실질금리가 오르면 보유 기회비용이 커짐 · 1997.1~2012.3 금 실질가격과 10년물 TIPS 수익률 상관계수 -0.82 · 10년물 금리 25bp 하락 ≈ 금 +1.75%
  - 탈동조화: 2022년 TIPS 약 250bp 상승에도 금 소폭 상승 · 중앙은행 순매입 2022 1,082t / 2023 1,037t / 2024 1,092t / 2025 863t vs 2010~2021 평균 473t
  - 전망(금리): 연준 9월 점도표 2026말 4.1% / 2027말 4.1% / 장기 3.2% · 현재 3.75~4.00%(2024.9~2025.12 1.75%p 인하, 2026.7 동결 후 9.16 인상) · 12월 인상 확률 82%(10.9) · 10년물 2026.12 5.10% 전망(WSJ)
  - 전망(금): 현재 약 4,143달러(10.5), 고점 약 5,590달러(1.28) · 골드만 2026말 4,900(연준 인상 시 4,440) · J.P.모건 4Q 평균 4,500 · BofA 4Q 3,750 · 씨티 6~12개월 4,500 · UBS 2027상반기 5,000 · WGC 기본 4,100±5%
  - 출처: FRED, LBMA, World Gold Council, Federal Reserve, CME FedWatch, Erb & Harvey(2013), 각 사 보도
- **Visualization**: rates-gold-dual (chart/dual_axis_line_chart, 19 years × 2 series); cb-purchases (column chart, 2010~21 avg / 2022 / 2023 / 2024 / 2025); gold-outlook (table/metric_table, 기관 × 전망 × 시점)
- **Native-ready**: rates-gold-dual=yes; cb-purchases=yes; gold-outlook=yes
- **Cover impact**: 결론 제목과 -0.82 숫자가 첫 시선을 받음. 구성은 차트 중심 리포트 1면
- **Fact IDs**: F001, F002, F003, F004, F006, F007, F010, F011, F014, F018, F019, F026, F027, F028, F029, F030, F031, F032, F035, F037, F038, F040, F041, F042, F044, F046, F047, F048

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under `notes/`
- **Content**: 결론을 먼저 말하고 원리, 탈동조화, 전망 순으로 장표 수치만 사용해 설명함. 금리 차트가 명목금리라는 점과 기관 전망이 보도 기준이라는 점을 언급함
- **Total duration**: 약 3분
- **Notes style**: formal
- **Presentation purpose**: 실질금리와 금 가격의 역관계 원리, 2022년 이후 약화 원인, 금리·금 가격 전망을 전달함
