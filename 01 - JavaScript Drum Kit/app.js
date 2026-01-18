const removeTransition = (key => {
    if (key.propertyName !== 'transform') return;
    key.target.classList.remove('playing');
})

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

window.addEventListener('keydown', playSound)

  const keys = Array.from(document.querySelectorAll('.key'))
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
  })