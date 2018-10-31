import TWEEN from '@tweenjs/tween.js'

function animate(time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}

requestAnimationFrame(animate)

export const createMotion = (initialState) => {
  return new TWEEN.Tween(initialState)
}

export default TWEEN
