// 미국 금리와 금 가격 1page — shin-ppt1 report 테마
// 수치 출처: ../us_rates_gold_20261012/sources/us_rates_gold_research.facts.json (F001~F048)
const tpl = require("./template.js");
const pres = tpl.newPres(require("pptxgenjs"), "report", "soft");
const { C, TS, F, MX, CW } = tpl;

// ── 수치 (표시값 기준) ──
const years = ["07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
const gold = [695.39, 871.96, 972.35, 1224.53, 1571.52, 1668.98, 1411.23, 1266.40, 1160.06, 1250.74,
              1257.12, 1268.49, 1392.60, 1769.64, 1799, 1800, 1941, 2386.20, 3431.54];   // F002·F003·F004
const ust10 = [4.63, 3.67, 3.26, 3.21, 2.79, 1.80, 2.35, 2.54, 2.13, 1.84,
               2.33, 2.91, 2.14, 0.89, 1.44, 2.95, 3.96, 4.21, 4.26];                   // F001
const cbLabels = ["과거 평균", "2022", "2023", "2024", "2025"];
const cbVals = [473, 1081.9, 1037.4, 1092.4, 863.3];                                     // F018·F019
if (gold.length !== years.length || ust10.length !== years.length) throw new Error("시계열 길이 불일치");
const drop = (5590 - 4143) / 5590 * 100;                                                // F030·F031
console.log("고점 대비 하락률 " + drop.toFixed(1) + "% (표시 -26%)");
console.log("2022~24 평균 대비 배수", (cbVals[1] / 473).toFixed(2), (cbVals[2] / 473).toFixed(2), (cbVals[3] / 473).toFixed(2));

// ── 좌표 ──
const LX = MX, LW = 5.80;            // 좌단: 추이 차트 + 금 전망 표
const RXX = 6.80, RW = 4.24;         // 우단: 금리 전망 표 + 중앙은행 매입 차트
const s = tpl.addSlide(pres);

tpl.header(s, "금 가격과 실질금리의 역관계, 2022년 이후 중앙은행 매입으로 약해짐",
  { eyebrow: "미국 금리 · 금 가격" });
tpl.summary(s, "금과 실질금리 역관계(상관 -0.82)는 2022년 이후 약화",
  "중앙은행 3년 연속 1,000t 이상 매입, 금은 고점 대비 -26%");

// ① 추이 차트 (판단 근거 블록)
tpl.sub(s, LX, 2.00, "금 가격과 10년물 금리 추이", "연평균, 2007~2025", LW - 0.16);
const base = tpl.chartBase();
s.addChart([
  { type: "line", data: [{ name: "금 가격(달러/온스, 왼쪽)", labels: years, values: gold }],
    options: { chartColors: [C.series[0]] } },
  { type: "line", data: [{ name: "10년물 국채 명목금리(%, 오른쪽)", labels: years, values: ust10 }],
    options: { chartColors: [C.series[1]], secondaryValAxis: true, secondaryCatAxis: true } }
], Object.assign(base, {
  x: LX, y: 2.40, w: LW, h: 2.62,
  showLegend: true, legendPos: "t",
  showValue: false,
  lineSize: 2, lineDataSymbol: "none", lineSmooth: false,
  catAxisLabelFontSize: TS.axis,
  valAxes: [
    { showValAxisTitle: false, valAxisMinVal: 0, valAxisMaxVal: 3600, valAxisMajorUnit: 600,
      valAxisLabelFormatCode: "#,##0", valAxisHidden: false, valAxisLineShow: false,
      valGridLine: { color: C.rule, style: "solid", size: 0.5 } },
    { showValAxisTitle: false, valAxisMinVal: 0, valAxisMaxVal: 6, valAxisMajorUnit: 1,
      valAxisLabelFormatCode: '0"%"', valAxisHidden: false, valAxisLineShow: false,
      valGridLine: { style: "none" } }
  ],
  catAxes: [{ catAxisTitle: "" }, { catAxisHidden: true }]
}));
s.addText([
  { text: "실질금리(TIPS): 2020.7 ", options: { color: C.mute } },
  { text: "-0.93%", options: { color: C.ink, bold: true } },
  { text: "(최저) → 2023.8 2% 돌파 → 26.10.8 ", options: { color: C.mute } },
  { text: "2.87%", options: { color: C.ink, bold: true } }
], { x: LX, y: 5.04, w: LW, h: 0.26, fontFace: F, fontSize: TS.legend, margin: 0, valign: "middle" });

// ② 금 가격 전망 표
tpl.sub(s, LX, 5.62, "금 가격 전망", "달러/온스 · 현재 4,143(10.5)", LW - 0.16);
const st = tpl.makeTableStyles(TS.tableMin);
const inst = ["골드만", "J.P.모건", "BofA", "씨티", "UBS", "WGC"];
const fc = ["4,900", "4,500", "3,750", "4,500", "5,000", "4,100"];
const when = ["26년 말", "4Q 평균", "4Q", "6~12개월", "27년 1H", "하반기"];
const goldRows = [
  [{ text: "구분", options: st.hd }].concat(inst.map(t => ({ text: t, options: st.hd }))),
  [{ text: "전망", options: st.td }].concat(fc.map((t, i) => ({ text: t, options: i === 2 ? st.numEm : st.num }))),
  [{ text: "시점", options: st.td }].concat(when.map(t => ({ text: t, options: st.tdM })))
];
const gEnd = tpl.openTable(s, goldRows, { x: LX, y: 6.06, w: LW, colW: [0.64, 0.86, 0.86, 0.86, 0.86, 0.86, 0.86],
  rowH: [0.40, 0.56, 0.56], margin: [3, 4, 3, 4] });

// ③ 금리 전망 표
tpl.sub(s, RXX, 2.00, "금리 전망", "기준일 2026.10.9", RW - 0.16);
const st2 = tpl.makeTableStyles(TS.tableMin);
const rateRows = [
  [{ text: "항목", options: st2.hd }, { text: "내용", options: st2.hd }],
  [{ text: "기준금리", options: st2.td }, { text: "3.75~4.00% (9.16 인상)", options: st2.tdL }],
  [{ text: "점도표", options: st2.td }, { text: "26·27년 말 4.1%, 장기 3.2%", options: st2.tdL }],
  [{ text: "시장", options: st2.td }, { text: "12월 인상 확률 82% (CME)", options: st2.tdL }],
  [{ text: "10년물", options: st2.td }, { text: "26.12 전망 5.10% (WSJ)", options: st2.tdL }],
  [{ text: "금 민감도", options: st2.td }, { text: "금리 25bp 하락 ≈ 금 +1.75%", options: st2.tdL }]
];
tpl.openTable(s, rateRows, { x: RXX, y: 2.44, w: RW, colW: [1.10, 3.14], rowH: [0.40, 0.56, 0.56, 0.56, 0.56, 0.56] });

// ④ 중앙은행 금 순매입
tpl.sub(s, RXX, 5.98, "중앙은행 금 순매입", "톤 · 과거 평균은 2010~21년", RW - 0.16);
const cbEnd = tpl.chartBar(s, RXX, 6.40, RW, 1.18, cbLabels, [{ name: "순매입(t)", vals: cbVals }],
  { dataLabelFormatCode: "#,##0", catAxisLabelFontSize: TS.axis, dataLabelFontSize: TS.value, barGapWidthPct: 80,
    chartColors: [C.rule, C.series[0], C.series[0], C.series[0], C.series[0]] });

tpl.footer(s, [
  "출처: FRED, LBMA(21~23년 반올림값), WGC, Federal Reserve(H.15·SEP), CME FedWatch, Erb & Harvey(1997~2012), WSJ, 언론 보도",
  "주: 기준일 2026.10.12. 차트 금리는 명목 10년물 연평균. 기관 전망은 보도 기준, 골드만은 연준 인상 시 26년 말 4,440달러, WGC는 기본 ±5%"
], { page: "1 / 1" });

tpl.checkLayout("1p report", { cols: [gEnd, cbEnd], footLines: 2 });
tpl.save(pres, process.argv[2]);
