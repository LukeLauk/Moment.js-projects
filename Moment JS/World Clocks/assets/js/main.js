


document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
  document.documentElement.style.setProperty('--timer-NY', "'" + moment().tz('America/New_York').format('h:mm a z') + "'");
  document.documentElement.style.setProperty('--timer-HK', "'" + moment().tz('Asia/Hong_Kong').format('h:mm a z') + "'");
  document.documentElement.style.setProperty('--timer-Mos', "'" + moment().tz('Europe/Moscow').format('h:mm a z') + "'");
  document.documentElement.style.setProperty('--timer-London', "'" + moment().tz('Europe/London').format('h:mm a z') + "'");
  

  requestAnimationFrame(updateTime);
}

