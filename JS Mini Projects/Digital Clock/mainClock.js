

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("hours").value = date.getHours();
  document.getElementById("minutes").value = date.getMinutes();
  document.getElementById("seconds").value = date.getSeconds();
}




