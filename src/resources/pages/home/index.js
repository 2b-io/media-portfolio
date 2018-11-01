// import css
import './style'

// javascript begin
import Parallax from 'parallax-js'
import randomInt from 'random-int'
import TWEEN, { createMotion } from 'js/services/motion'

const SIZES = [ 4, 8, 16, 32, 64, 128 ]

const createBlock = (scene, layer, sizeRange, initialBlock) => {
  // get viewport size real-time
  const rect = scene.getBoundingClientRect()
  const { width, height } = rect

  // randomize things
  const size = SIZES[ randomInt(...sizeRange) ]
  const x = randomInt(width)
  const duration = randomInt(4e3, 8e3)
  const latency = randomInt(4e3)

  // initial style
  const block = initialBlock || document.createElement('div')
  block.style.transform = `translate3d(${ x }px, -${ size + 2}px, 0)`
  block.style.width = `${ size }px`
  block.style.height = `${ size }px`

  // define falling motion
  const fallingMotion = createMotion({ y: -(size + 2) })
    .to({ y: height + 24 }, duration)
    .onUpdate(({ y }) => {
      block.style.transform = `translate3d(${ x }px, ${ y }px, 0)`
    })
    .easing(TWEEN.Easing.Quintic.In)
    .delay(latency)
    .onComplete(() => {
      // repeat motion
      createBlock(scene, layer, sizeRange, block)
    })
    .start()

  // append to layer in first run
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
    sizeRange: [ 2, 5 ],
    blocksPerLayer: 2
  })
  createScene(document.getElementById('target-scene'), {
    sizeRange: [ 1, 3 ],
    blocksPerLayer: 24
  })
})
