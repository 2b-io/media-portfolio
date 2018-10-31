// import css
import './style'

// javascript begin
import Parallax from 'parallax-js'
import randomInt from 'random-int'
import TWEEN, { createMotion } from 'js/services/motion'


const SIZES = [ 4, 8, 16 ]

const createBlock = (scene, layer, initialBlock) => {
  const rect = scene.getBoundingClientRect()
  const { width, height } = rect

  const size = SIZES[ randomInt(2) ]

  const block = initialBlock || document.createElement('div')

  block.classList.add('block')
  // block.style.left = `${ randomInt(width) }px`
  block.style.width = `${ size }px`
  block.style.height = `${ size }px`

  const motion = createMotion({
    x: randomInt(width),
    y: height + 24
  }).to({
    x: randomInt(width),
    y: -24
  }, randomInt(4e3, 10e3))

  motion.onUpdate(({ x, y }, ...rest) => {
    block.style.left = `${ x }px`
    block.style.top = `${ y }px`
  })

  motion.onComplete(() => {
    createBlock(scene, layer, block)
  })

  motion.easing(TWEEN.Easing.Quadratic.In)
  motion.start()

  if (!initialBlock) {
    layer.appendChild(block)
  }
}

const createTargetScene = () => {
  const scene = document.getElementById('target-scene')
  const layers = scene.querySelectorAll('.layer')

  Array.from(layers).forEach((layer) => {
    for (let i = 0; i < 8; i++) {
      createBlock(scene, layer)
    }
  })

  const parallaxInstance = new Parallax(scene)
}

const createOriginScene = () => {
  const scene = document.getElementById('origin-scene')
  const layers = scene.querySelectorAll('.layer')
  const numberOfBlocks = Math.ceil(window.innerWidth / 96)

  console.log(numberOfBlocks)

  Array.from(layers).forEach((layer, index) => {
    layer.innerHTML = ''

    for (let i = 0; i < numberOfBlocks; i++) {
      const block = document.createElement('div')
      block.classList.add('block')
      block.style.top = `${ randomInt(-48, -16) }px`

      const left = index % (layers.length)

      block.style.left = `calc(${ ((100 / (numberOfBlocks - 1)) * i) }%`

      block.style.transform = `translateX(${ randomInt(-48, -16) }px)`

      layer.appendChild(block)
    }
  })

  const parallaxInstance = new Parallax(scene)
}

window.addEventListener('load', () => {
  createTargetScene()
})
