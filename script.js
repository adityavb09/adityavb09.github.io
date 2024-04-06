const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollHeight - clientHeight === scrollTop) {
    footer.classList.remove('hide');
  } else {
    footer.classList.add('hide');
  }
});
