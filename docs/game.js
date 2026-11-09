(function () {
  var app = document.getElementById('app');
  fetch('game.json').then(function (r) { return r.json(); }).then(function (game) {
    var mode = game.modes.classic;
    var secret = mode.min + Math.floor(Math.random() * (mode.max - mode.min + 1));
    var greeting = document.createElement('p');
    greeting.textContent = game.greeting;
    var input = document.createElement('input');
    input.type = 'number';
    var button = document.createElement('button');
    button.textContent = 'Проверить';
    var answer = document.createElement('p');
    button.onclick = function () {
      var n = Number(input.value);
      if (n < secret) answer.textContent = mode.higher;
      else if (n > secret) answer.textContent = mode.lower;
      else answer.textContent = mode.win;
    };
    app.appendChild(greeting);
    app.appendChild(input);
    app.appendChild(button);
    app.appendChild(answer);
  });
})();
