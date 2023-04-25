const countdown = () => {
  const countDate = new Date('April 28, 2023 17:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  daysElement.innerHTML = textDay;
  hoursElement.innerHTML = textHour;
  minutesElement.innerHTML = textMinute;
  secondsElement.innerHTML = textSecond;

  document.title = textDay + "jours " + textHour + "h " + textMinute + "min " + textSecond + "s"; 
  
  if (gap < 0) {
    clearInterval(interval);
    document.getElementById("headline").innerText = "Terminé !";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.title = "Terminé !"
}
};

const interval = setInterval(countdown, 1000);