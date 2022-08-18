document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
 
  document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dddd") + "'");
  document.documentElement.style.setProperty('--timer-CT', "'" + moment().format("LT") + "'");
  
  
  requestAnimationFrame(updateTime);
}

dec.tz('America/New_York').format('ha z'); 