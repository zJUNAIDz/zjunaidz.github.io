setInterval(clock, 1000);
function clock() {
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');
  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();
  hours.innerHTML = hrs;
  minutes.innerHTML = mins;
  seconds.innerHTML = secs;
if (hrs > 11) {
    ampm.innerHTML = 'PM';
  }
  if (hrs == 0) {
    hours.innerHTML = 1 + hrs;
  };
  if (secs < 10) {
    seconds.innerHTML = '0' + secs;
  };
  if (mins < 10) {
    minutes.innerHTML = '0' + mins;
  };
  if (hrs < 10) {
    hours.innerHTML = '0' + hrs;
  };
  if (hrs > 12) {
    hours.innerHTML = hrs ;
  };
};
