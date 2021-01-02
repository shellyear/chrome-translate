window.onselect = (e) => {
  console.log('Im inject');
  console.log('event', e.target.offsetTop, e.target.offsetWidth);
  console.log('e.target.value', e.target.value);
  console.log('e,', e);

  console.log('root',document.getRootNode());
};