document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  let inputValue = document.getElementById('message').value;
  let inputValue2 = document.querySelector('.res');
  let cryptedValue = btoa(inputValue);
  inputValue2.value = `${window.location}#${cryptedValue}`;
  inputValue2.select();
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude},20z`);
    },
    function (error) {
      if (error.code == error.PERMISSION_DENIED) {
        console.log('User denied the request for Geolocation.');
      }
    }
  );
}
