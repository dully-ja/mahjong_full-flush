window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('td a');

  links.forEach(link => {
    const text = link.innerText.trim();
    
    if (/^[1-9]+$/.test(text)) {
      link.setAttribute('data-id', text);
      
      let imagesHtml = "";
      const digits = text.split("");
      digits.forEach(num => {
        const tileUrl = `https://raw.githubusercontent.com/FluffyStuff/riichi-mahjong-tiles/master/Export/Regular/Man${num}.png`;
        imagesHtml += `<img src="${tileUrl}" style="height: 35px; vertical-align: middle; margin: 0 1px;">`;
      });
      
      // ★ divで包んでwhite-space: nowrapを指定
      link.innerHTML = `<div style="display: inline-flex; flex-wrap: nowrap; align-items: center;">${imagesHtml}</div>`;
    }
  });

  // ★ テーブルのセルが縮まないようにtdにも設定
  document.querySelectorAll('td').forEach(td => {
    td.style.whiteSpace = 'nowrap';
  });
});
