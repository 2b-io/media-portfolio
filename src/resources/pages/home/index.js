// import css
import './style'

// javascript begin
import Parallax from 'parallax-js'
import randomInt from 'random-int'
import TWEEN, { createMotion } from 'js/services/motion'

const SIZES = [ 4, 8, 16, 32, 64, 128 ]

const createBlock = (scene, layer, sizeRange, initialBlock) => {
  const rect = scene.getBoundingClientRect()
  const { width, height } = rect

  const size = SIZES[ randomInt(...sizeRange) ]

  const block = initialBlock || document.createElement('div')

  block.classList.add('block')
  // block.style.left = `${ randomInt(width) }px`
  block.style.width = `${ size }px`
  block.style.height = `${ size }px`

  const x = randomInt(width)
  const duration = randomInt(4e3, 10e3)
  const latency = randomInt(2e3)

  block.style.left = `${ x }px`
  block.style.top = '-64px'

  const verticalMotion = createMotion({ y: -64 })
    .to({ y: height + 24 }, duration)
    .onUpdate(({ y }) => {
      block.style.top = `${ y }px`
    })
    .easing(TWEEN.Easing.Quadratic.In)
    .delay(latency)

  // const horizontalMotion = createMotion({ x })
  //   .to({ x: x + randomInt(-100, 100) }, duration)
  //   .onUpdate(({ x }) => {
  //     block.style.left = `${ x }px`
  //   })
  //   .easing(TWEEN.Easing.Back.InOut)

  // repeat montion
  verticalMotion.onComplete(() => {
    createBlock(scene, layer, sizeRange, block)
  })

  // start both motions
  verticalMotion.start()
  // horizontalMotion.start()

  if (!initialBlock) {
    layer.appendChild(block)
  }
}

const createScene = (scene, { sizeRange, blocksPerLayer }) => {
  const layers = scene.querySelectorAll('.layer')

  Array.from(layers).forEach((layer) => {
    for (let i = 0; i < blocksPerLayer; i++) {
      createBlock(scene, layer, sizeRange)
    }
  })

  const parallaxInstance = new Parallax(scene)
}

window.addEventListener('load', () => {
  createScene(document.getElementById('origin-scene'), {
    sizeRange: [ 2, 4 ],
    blocksPerLayer: 4
  })
  createScene(document.getElementById('target-scene'), {
    sizeRange: [ 0, 2 ],
    blocksPerLayer: 24
  })
})
