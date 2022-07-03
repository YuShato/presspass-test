const geoButtonElement = document.getElementById("geo");
const locationMessage = document.getElementById("locationMessage");

const geoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    locationMessage.textContent = "Ваш браузер не поддерживает геолокацию";
  }
};

const showPosition = (position) => {
  locationMessage.textContent = `Широта ${position.coords.latitude} долгота ${position.coords.longitude}`;
};

const showError = (error) => {
  if (error.PERMISSION_DENIED) {
    locationMessage.textContent =
      "Пользователь не разрешил отслеживание геолокации";
  }
};

geoButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(geoButtonElement);
  geoLocation();
});
