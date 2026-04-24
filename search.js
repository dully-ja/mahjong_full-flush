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

  document.getElementById('resultDisplay').innerText = "5進数変換結果: " + result5;

  // --- 修正ポイント：ページ内の「すべての要素」からテキストを探す ---
  // ページ内のすべてのタグ（p, td, h1, h2, h3, li など）を取得
  const allElements = document.querySelectorAll('p, td, th, h1, h2, h3, li, span');
  let targetElement = null;

  for (let el of allElements) {
    // 要素のテキストが、変換後の5進数と「完全に一致」するか「含んでいる」かチェック
    // ※ 誤作動を防ぐため、ここでは「テキストが検索キーそのもの」である要素を優先します
    if (el.innerText.trim() === result5 || (el.children.length === 0 && el.innerText.includes(result5))) {
      targetElement = el;
      break; // 最初に見つかった場所で止める
    }
  }

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 画面中央に来るように調整
    
    // 強調表示（フラッシュ）
    const originalBg = targetElement.style.backgroundColor;
    targetElement.style.backgroundColor = "#fff3cd";
    targetElement.style.transition = "background-color 0.5s";
    setTimeout(() => {
      targetElement.style.backgroundColor = originalBg || "transparent";
    }, 2000);
  } else {
    alert("一致する文字列が見つかりませんでした: " + result5);
  }
}
