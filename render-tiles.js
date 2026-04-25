window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('td a');

  links.forEach(link => {
    const text = link.innerText.trim();
    
    // 1〜9の数字のみの場合
    if (/^[1-9]+$/.test(text)) {
      // 元の数字を属性として保存（検索用）
      link.setAttribute('data-id', text);
      
      let imagesHtml = "";
      const digits = text.split("");
      digits.forEach(num => {
        // 萬子(m)の画像を表示
        const tileUrl = `https://raw.githubusercontent.com/FluffyStuff/riichi-mahjong-tiles/master/Export/Regular/Man${num}.png`;
        imagesHtml += `<img src="${tileUrl}" style="height: 35px; vertical-align: middle; margin: 0 1px;">`;
      });
      
      link.innerHTML = imagesHtml;
    }
  });
});
