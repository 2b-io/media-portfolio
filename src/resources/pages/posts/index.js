import { throttle } from 'throttle-debounce'

const updateScrollIndicator = () => {
  const vpHeight = window.innerHeight
  const scrollTop = document.body.parentElement.scrollTop
  const scrollHeight = document.body.parentElement.scrollHeight

  const scrollProgress = scrollTop / (scrollHeight - vpHeight) * 100

  const scrollIndicator = document.getElementById('scroll-indicator')


  if (scrollIndicator) {
    scrollIndicator.style.width = `${ scrollProgress }%`
  }
}

const throttledUpdateScrollIndicator = throttle(200, updateScrollIndicator)

window.addEventListener('load', throttledUpdateScrollIndicator)
window.addEventListener('scroll', throttledUpdateScrollIndicator)
