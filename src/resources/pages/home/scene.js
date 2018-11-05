// javascript begin
import Parallax from 'parallax-js'
import randomInt from 'random-int'
import { throttle } from 'throttle-debounce'

const SIZES = [ 4, 8, 16, 32, 64, 128 ]
const timingFunc = 'cubic-bezier(0.685, 0.020, 0.915, 0.560)'

const listenOnce = (dom, event, eventHandler) => {
  const handler = (...args) => {
    try {
      eventHandler(...args)
    } finally {
      dom.removeEventListener(event, handler)
    }
  }

  dom.addEventListener(event, handler)
}

const createBlock = (viewport, layer, sizeRange, block) => {
  const { width, height } = viewport

  // randomize things
  const size = SIZES[ randomInt(...sizeRange) ]
  const x = randomInt(8, width - size - 8)
  const duration = randomInt(5e3, 10e3)
  const latency = randomInt(5e3)

  // set style
  block.style.left = `${ x }px`
  block.style.width = `${ size }px`
  block.style.height = `${ size }px`
  block.style.transform = `translateY(-${ size + 64 }px)`

  // set animation
  block.style.animation = `falling-${ height }-${ size } ${ duration }ms ${ timingFunc } ${ latency }ms`

  // all set - go
  block.style.display = 'block'

  listenOnce(block, 'animationend', () => {
    block.style.display = 'none'

    setTimeout(() => createBlock(viewport, layer, sizeRange, block))
  })
}

const createKeyFrames = (height, sizes) => {
  const style = document.getElementById(`falling-${ height }`)

  if (style) {
    return
  }

  const appendingStyle = document.createElement('style')

  appendingStyle.id = `falling-${ height }`
  appendingStyle.innerHTML = sizes.map((size) => `
    @keyframes falling-${ height }-${ size } {
      from {
        transform: translateY(-${ size + 64 }px);
      }

      to {
        transform: translateY(${ height + 64 }px);
      }
    }
  `).join('\n')

  document.body.appendChild(appendingStyle)
}

const createScene = (scene, { sizeRange, blocksPerLayer }) => {
  const viewport = {}

  window.addEventListener('resize', throttle(1000, () => {
    // get new viewport size
    const rect = scene.getBoundingClientRect()
    viewport.width = Math.ceil(rect.width)
    viewport.height = Math.ceil(rect.height)

    createKeyFrames(viewport.height, SIZES)
  }))

  // initial viewport size
  const rect = scene.getBoundingClientRect()

  viewport.width = rect.width
  viewport.height = rect.height

  createKeyFrames(viewport.height, SIZES)

  const layers = scene.querySelectorAll('.layer')

  Array.from(layers).forEach((layer) => {
    for (let i = 0; i < blocksPerLayer; i++) {
      const block = document.createElement('div')

      createBlock(viewport, layer, sizeRange, block)

      layer.appendChild(block)
    }
  })

  const parallaxInstance = new Parallax(scene)
}

window.addEventListener('load', () => {
  createScene(document.getElementById('origin-scene'), {
    sizeRange: [ 2, 5 ],
    blocksPerLayer: 1
  })
  createScene(document.getElementById('target-scene'), {
    sizeRange: [ 1, 3 ],
    blocksPerLayer: 8
  })
})
