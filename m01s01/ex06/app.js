var inputRadius = document.getElementById('radius');
var result = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var radius = inputRadius.value || 0;
  var result = 0;

  result = 4 * Math.PI * Math.POW(radius, 2);

  elementResult.innerText = result;
});
