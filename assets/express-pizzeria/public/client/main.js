fetch('/menu')
  .then(res => res.json())
  .then(menu => document.body.innerHTML = menu.map(pizza => `<img src='/${pizza.image}' alt='${pizza.name}'>`).join(''));
