function updateDateTime() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Convert hours to 12-hour format and determine AM or PM
  let amOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  // Update the HTML elements with the current date and time
  document.getElementById('current-date').textContent = `${month}-${day}-${year}`;
  document.getElementById('current-time').textContent = `${hours}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)} ${amOrPm}`;
}

// Function to add leading zero to single-digit numbers
function formatTimeComponent(timeComponent) {
  return timeComponent < 10 ? `0${timeComponent}` : timeComponent;
}

// Call the function to update the date and time initially
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);