function isOutRange(bro, dom) {
  if (bro.classList.contains('outline-bar'))
    return true;
  if (bro.tagName[0] === "H")
    return bro.tagName >= dom.tagName;
  return false;
}

function fold(dom) {
  let brothers = $(dom).nextAll();
  for (let i = 0; i < brothers.length && !isOutRange(brothers[i], dom); i++)
    $(brothers[i]).addClass("hide");
  $(dom).addClass("fold");
}

function unfold(dom) {
  let brothers = $(dom).nextAll();
  for (let i = 0; i < brothers.length && !isOutRange(brothers[i], dom); i++)
    $(brothers[i]).removeClass("hide");
  $(dom).removeClass("fold");
}

function foldHeading(dom) {
  if ($(dom).hasClass("fold")) unfold(dom);
  else fold(dom);
}

$("h2,h3,h4").each((i, h) => {
  $(h).bind("click", () => foldHeading(h));
});

$(".outline-2,.outline-3,.outline-4").each((i, h) => {
  ind = h.className.slice(-1)
  h = $(h)
  h.append(`<div class="outline-bar" style="z-index: ${ind}"></div>`)
  h.children(".outline-bar")
    .bind("click", (e) => {
      e.stopPropagation();
      foldHeading(h.children(':first-child'));
      return false;
    });
});

$('#table-of-contents h2').text('显示目录')
