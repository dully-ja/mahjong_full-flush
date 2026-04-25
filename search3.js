// 入力された値をそのまま探す

let lastHighlightedElement = null;
let lastOriginalBg = "";

function executeSearch() {
  const inputField = document.getElementById('decimalInput');
  const input = inputField.value;
  
  if (!input) return;

  // 検索開始時に前回のハイライトをリセット
  resetHighlight();

  const searchKey = input;
  document.getElementById('resultDisplay').innerText = "検索キーワード: " + searchKey;

  // 1. ID検索 → 2. テキスト検索
  let targetElement = document.getElementById(searchKey);
  if (!targetElement) {
    const allElements = document.querySelectorAll('p, td, th, h1, h2, h3, li, span, a');
    for (let el of allElements) {
      if (el.innerText.includes(searchKey)) {
        targetElement = el;
        break;
      }
    }
  }

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    const highlightTarget = targetElement.closest('td') || targetElement;
    
    // ハイライトを適用
    lastHighlightedElement = highlightTarget;
    lastOriginalBg = highlightTarget.style.backgroundColor;
    highlightTarget.style.backgroundColor = "#fff3cd";
    highlightTarget.style.transition = "background-color 0.3s";

    // 入力欄を全選択（次の入力準備）
    inputField.select();
    
    // 【重要】入力監視側で「今の検索キーワードと同じ」なら色を消さないように記憶
    inputField.dataset.currentMatch = searchKey;
  }
}

function resetHighlight() {
  if (lastHighlightedElement) {
    lastHighlightedElement.style.backgroundColor = lastOriginalBg || "transparent";
    lastHighlightedElement = null;
  }
}

// 入力欄の監視
document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('decimalInput');
  inputField.addEventListener('input', () => {
    // 入力中の値が、現在ハイライトしているキーワードと異なる場合のみ色を消す
    if (inputField.value !== inputField.dataset.currentMatch) {
      resetHighlight();
    }
  });
});
