<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: ko-KR
- audience: 금리와 원자재를 기본적으로 아는 금융·투자 실무자와 경영진
- objective: 실질금리와 금 가격의 역관계 원리, 2022년 이후 약화 원인, 금리·금 가격 전망을 한 장에 제시해 금리만으로 금 방향을 판단하면 안 된다는 점을 이해시킴
- core_message: 1997~2012년 금 가격과 실질금리의 상관계수는 -0.82였으나, 2022년 이후 중앙은행이 3년 연속 1,000t 넘게 사들이면서 이 관계가 약해짐
- consumption_mode: text

## mode
- mode: custom
- mode_references: pyramid
- mode_behavior: 제목이 결론 문장이고, 그 아래 원리 → 탈동조화 → 전망 순서로 근거 3개를 붙이며 모든 수치는 출처 줄로 뒷받침함

## visual_style
- visual_style: custom
- visual_style_references: data-journalism, editorial
- visual_style_behavior: 흰 지면 위에 차트를 중심축으로 두고 오른쪽 사이드바를 얇은 구분선으로 나눔. 카드 상자 대신 헤어라인과 키커, 큰 숫자로 위계를 만들고 작은 막대 차트와 전망 표를 사이드바에 넣음. 금색은 금 가격과 핵심 수치에만, 파랑은 금리 계열에만 쓰며 그림자·발광 없이 평면으로 처리하고 하단에 출처 줄을 둠

## colors
- background: #FFFFFF
- secondary_bg: #F5F3EE
- primary: #1F2A44
- accent: #B8862B
- secondary_accent: #5B7FA6
- body_text: #222222
- secondary_text: #6B6B6B
- divider: #D9D6CF

## typography
- font_family: "Malgun Gothic", Arial, sans-serif
- title_family: "Malgun Gothic", Arial, sans-serif
- body_family: "Malgun Gothic", Arial, sans-serif
- body: 18
- title: 30
- subtitle: 20
- annotation: 13
- display: 40

## icons
- library: tabler-outline
- stroke_width: 2
- inventory: tabler-outline/scale, tabler-outline/building-bank, tabler-outline/trending-up, tabler-outline/calendar-stats

## page_rhythm
- P01: dense

## page_visualizations
- P01: chart/dual_axis_line_chart

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
