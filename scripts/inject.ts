window.onselect = (e) => { 
  let target = e.target,
    offsetTop = target.offsetTop,
    offsetWidth = target.offsetWidth,
    className = target.className,
    id = target.id;

  const tip = document.createElement('p');
  const targetDiv = document.getElementsByClassName(className)[0];
  
  target = '';

  console.log('Im inject');
  console.log('event', e.target.offsetTop, e.target.offsetWidth);
  console.log('e.target.value', e.target.value);
};

//write func which 

//EN <=> RU bude v popupu kdyz select