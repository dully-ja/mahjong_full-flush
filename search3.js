// 入力された値をそのまま探す

function executeSearch() {
  const input = document.getElementById('decimalInput').value;
  
  // 入力が空でないかチェック（13桁固定でなくても動くように、あえて桁数制限は緩めています）
  if (!input || input.length === 0) {
    alert("検索する数値を入力してください");
    return;
  }

  // 変換なし：入力された数値をそのまま検索キーにする
  const result5 = input; 

  document.getElementById('resultDisplay').innerText = "検索キーワード: " + result5;

  // --- 検索ロジック ---
  
  // 1. まず ID が一致する要素を直接探す
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
