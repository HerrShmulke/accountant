let scrollPosition;

export function showScroll() {
  const html = document.documentElement;

  html.classList.remove('hide-scroll');
  html.style.marginRight = '';
  window.scrollTo(0, scrollPosition);
  html.style.top = '';
}

export function hideScroll() {
  const html = document.documentElement;

  scrollPosition = window.pageYOffset;

  const marginSize = window.innerWidth - html.clientWidth;

  if (marginSize) {
    html.style.marginRight = `${marginSize}px`;
  } else {
    html.style.marginRight = '';
  }

  html.style.top = `${-scrollPosition}px`;
  html.classList.add('hide-scroll');
}
