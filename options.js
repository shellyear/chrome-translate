let input = document.getElementById('input');

input.onchange = (e) => {
  console.log(e.target.value);
  console.log('');
};

window.onselect = (e) => {
  console.log('event', e.target.offsetTop, e.target.offsetWidth);
  console.log('e.target.value', e.target.value);
};