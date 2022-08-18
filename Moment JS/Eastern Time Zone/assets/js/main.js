document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
 
 
  document.documentElement.style.setProperty('--timer-NY', "'" + moment().tz('America/New_York').format("LT") + "'");
  
  
  requestAnimationFrame(updateTime);
}

dec.tz('America/New_York').format('ha z'); 