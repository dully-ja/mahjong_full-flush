// ソースにある <a id="___"> を直接ピンポイントで見つけ出します。これで、<br> や他の数列が混ざっていても、IDを優先してジャンプするようになります。

function executeSearch() {
  const input = document.getElementById('decimalInput').value;
  
  if (input.length !== 13) {
    alert("13桁の数値を入力してください");
    return;
  }

  // 1～9の出現回数をカウント
  let counts = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
  const digits = input.split('');
  digits.forEach(d => {
    if (counts[d] !== undefined) counts[d]++;
  });

  // 9桁の文字列（検索キー）を作成
  let result5 = "";
  for (let i = 1; i <= 9; i++) {
    result5 += counts[i];
  }

  // --- 追加：先頭と末尾の0を削除する ---
  result5 = result5.replace(/^0+|0+$/g, '');
  // ----------------------------------

  document.getElementById('resultDisplay').innerText = "5進数変換結果: " + result5;

  // --- 検索ロジックの改善 ---
  
  // 1. まず ID が一致する要素を直接探す（<a id="___"> 対策）
  let targetElement = document.getElementById(result5);

  // 2. IDで見つからない場合、ページ内の全要素からテキストを探す
  if (!targetElement) {
    const allElements = document.querySelectorAll('p, td, th, h1, h2, h3, li, span, a');
    for (let el of allElements) {
      if (el.innerText.includes(result5)) {
        targetElement = el;
        break;
      }
    }
  }

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // 強調表示（要素そのものか、親のセルを光らせる）
    const highlightTarget = targetElement.closest('td') || targetElement;
    const originalBg = highlightTarget.style.backgroundColor;
    highlightTarget.style.backgroundColor = "#fff3cd";
    highlightTarget.style.transition = "background-color 0.5s";
    setTimeout(() => {
      highlightTarget.style.backgroundColor = originalBg || "transparent";
    }, 2000);

    // 次の入力のために、入力欄の数字を選択状態にする
    document.getElementById('decimalInput').select();
  } else {
    alert("一致する箇所が見つかりませんでした: " + result5);
  }
}
