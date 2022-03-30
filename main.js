document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  let inputValue = document.getElementById('message').value;
  let inputValue2 = document.querySelector('.res');
  let cryptedValue = btoa(inputValue);
  inputValue2.value = `${window.location}#${cryptedValue}`;
  inputValue2.select();
});
