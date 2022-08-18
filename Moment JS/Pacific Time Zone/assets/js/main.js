document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
 
 
  document.documentElement.style.setProperty('--timer-NY', "'" + moment().tz('America/Los_Angeles').format("LT") + "'");
  
  
  requestAnimationFrame(updateTime);
}

