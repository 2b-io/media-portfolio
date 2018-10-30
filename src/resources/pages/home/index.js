// import css
import './style'

// javascript begin
import Parallax from 'parallax-js'

window.addEventListener('load', () => {
  const scene = document.getElementById('scene')

  const parallaxInstance = new Parallax(scene)

  const blocks = document.querySelectorAll('.blocks')

  Array.from(blocks).forEach((blocks) => {
    for (let i = 0; i < 1; i++) {
      const block = document.createElement('div')
      block.className = 'block'

      blocks.appendChild(block)
      block.style.top = `${ Math.random() * (300 - 48) }px`
      block.style.left = `${ Math.random() * (300 - 48) }px`
    }
  })
})
