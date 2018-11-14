import { throttle } from 'throttle-debounce'

const updateScrollIndicator = () => {
  const vpHeight = window.innerHeight
  const scrollTop = document.body.scrollTop || document.body.parentElement.scrollTop || 0
  const scrollHeight = document.body.scrollHeight || document.body.parentElement.scrollHeight || vpHeight

  const scrollProgress = scrollTop / (scrollHeight - vpHeight) * 100

  const scrollIndicator = document.getElementById('scroll-indicator')

  if (scrollIndicator) {
    scrollIndicator.style.width = `${ scrollProgress }%`
  }
}

const throttledUpdateScrollIndicator = throttle(50, updateScrollIndicator)

window.addEventListener('load', throttledUpdateScrollIndicator)
window.addEventListener('scroll', throttledUpdateScrollIndicator)
