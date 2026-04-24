window.addEventListener('DOMContentLoaded', () => {
  const tocList = document.getElementById('toc-list');
  const headers = document.querySelectorAll('h2, h3');

  headers.forEach((header, index) => {
    if (!header.id) {
      header.id = 'header-' + index;
    }
    const li = document.createElement('li');
    li.style.marginBottom = "5px";
    li.style.paddingLeft = header.tagName === 'H3' ? "15px" : "0px";

    const a = document.createElement('a');
    a.href = '#' + header.id;
    a.textContent = header.textContent;
    
    li.appendChild(a);
    tocList.appendChild(li);
  });
});
