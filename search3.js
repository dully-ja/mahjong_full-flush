// 入力された値をそのまま探す

let lastHighlightedElement = null; // 現在光っている要素を記録する変数
let lastOriginalBg = "";          // その要素の元の色を記録

function executeSearch() {
  const inputField = document.getElementById('decimalInput');
  const input = inputField.value;
  
  if (!input) return;

  // 以前のハイライトがあれば元に戻す
  resetHighlight();

  const result5 = input; 
  document.getElementById('resultDisplay').innerText = "検索キーワード: " + result5;

  // 1. ID検索 → 2. テキスト検索
  let targetElement = document.getElementById(result5);
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
    
    const highlightTarget = targetElement.closest('td') || targetElement;
    
    // 現在の状態を保存して光らせる（setTimeoutは削除）
    lastHighlightedElement = highlightTarget;
    lastOriginalBg = highlightTarget.style.backgroundColor;
    highlightTarget.style.backgroundColor = "#fff3cd";
    highlightTarget.style.transition = "background-color 0.3s";

    inputField.select();
  }
}

// ハイライトを元に戻す関数
function resetHighlight() {
  if (lastHighlightedElement) {
    lastHighlightedElement.style.backgroundColor = lastOriginalBg || "transparent";
    lastHighlightedElement = null;
  }
}

// 入力欄の内容が変わったら（1文字でも消したり変えたりしたら）色を消す
document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('decimalInput');
  inputField.addEventListener('input', () => {
    // 入力欄が空、または今のハイライト対象と値が異なる場合にリセット
    resetHighlight();
  });
});
