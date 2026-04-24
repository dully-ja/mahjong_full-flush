// 13桁の10進数を5進数（枚数カウント）に変換してジャンプする関数
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

  // ページ内を検索
  // 見出し（h2, h3）の中から、変換結果の数字が含まれているものを探す
  const headers = document.querySelectorAll('h2, h3');
  let targetElement = null;

  headers.forEach(h => {
    if (h.textContent.includes(result5)) {
      targetElement = h;
    }
  });

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // 見つけた場所を一時的に黄色くする
    targetElement.style.backgroundColor = "#fff3cd";
    setTimeout(() => { targetElement.style.backgroundColor = "transparent"; }, 2000);
  } else {
    alert("一致するセクションが見つかりませんでした: " + result5);
  }
}
