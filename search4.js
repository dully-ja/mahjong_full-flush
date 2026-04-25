function executeSearch() {
  const inputField = document.getElementById('decimalInput');
  const searchKey = inputField.value;
  if (!searchKey) return;

  resetHighlight();
  document.getElementById('resultDisplay').innerText = "検索キーワード: " + searchKey;

  let targetElement = null;

  // ページ内のすべてのリンクをチェック
  const allLinks = document.querySelectorAll('td a');
  for (let a of allLinks) {
    // data-id属性（画像化後）または innerText（画像化前）が一致するか確認
    if (a.getAttribute('data-id') === searchKey || a.innerText.trim() === searchKey) {
      targetElement = a;
      break;
    }
  }

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    const highlightTarget = targetElement.closest('td') || targetElement;
    lastHighlightedElement = highlightTarget;
    lastOriginalBg = highlightTarget.style.backgroundColor;
    highlightTarget.style.backgroundColor = "#fff3cd";
    highlightTarget.style.transition = "background-color 0.3s";

    inputField.select();
    inputField.dataset.currentMatch = searchKey;
  } else {
    alert("一致する箇所が見つかりませんでした: " + searchKey);
  }
}

// ...（resetHighlight関数とDOMContentLoadedの監視は以前のままでOK）
