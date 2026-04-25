---
layout: default
---

[多面張聴牌の構造解析_structure analysis for multiple-wait shapes](element2.md)

{% include 13_4.md %}

{% include 13_5.md %}

{% include 13_6.md %}

{% include 13_7.md %}

{% include 13_8.md %}

{% include 13_9.md %}

<!-- 1. 検索窓の見た目（サイドバーの上の方に表示されます） -->
<div class="sidebar-search" style="position: fixed; left: 20px; top: 20px; width: 150px; z-index: 1000; background: #fff; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
  <p style="margin: 0; font-size: 0.8em;">手牌13枚入力</p>
  <!-- 13桁に達した瞬間に自動実行される設定 -->
<input type="number" id="decimalInput" style="width: 100%; box-sizing: border-box;" 
       oninput="if(this.value.length === 13) executeSearch()"
       onkeydown="if(event.key === 'Enter') executeSearch()">
  <button onclick="executeSearch()" style="width: 100%; margin-top: 5px;">検索</button>
  <p id="resultDisplay" style="margin: 5px 0 0 0; font-size: 0.7em; color: #666;"></p>
</div>

<!-- 2. 目次の表示場所 -->
<div id="toc-container" class="sidebar-nav">
  <p style="font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ccc;">目次</p>
  <ul id="toc-list" style="list-style: none; padding-left: 0;"></ul>
</div>

<!-- 3. デザイン（CSS） -->
<style>
/* 以前お伝えしたCSSをそのまま、あるいは微調整してここに置く */
@media (min-width: 1000px) {
  body { padding-left: 250px; }
  .sidebar-nav {
    position: fixed;
    left: 20px;
    top: 150px; /* 検索窓の下に配置 */
    width: 150px;
    max-height: 60vh;
    overflow-y: auto;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    font-size: 0.9em;
  }
}
/* 入力欄の上下矢印（スピンボタン）を非表示にする */
/* Chrome, Safari, Edge, Opera 用 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox 用 */
input[type=number] {
  -moz-appearance: textfield;
}
</style>

<!-- 4. 2つのプログラムを読み込む -->
<script src="search3.js"></script>
<script src="toc.js"></script>
