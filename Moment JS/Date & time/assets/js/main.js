document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
  document.documentElement.style.setProperty('--timer-m_d_y_t', "'" + moment().format('MMMM Do YYYY, h:mm:ss a') + "'");

  requestAnimationFrame(updateTime);
}

