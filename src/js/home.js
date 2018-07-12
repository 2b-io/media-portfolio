import $ from 'jquery'

import 'stylus/home.styl'

$(document).ready(function(){
	handleHoldButtons()
})

function handleHoldButtons() {
	let mouseStillDown = false
  let maxSize = $('#trusted-image-wrapper').outerWidth()
	let itemSize = $('#trusted-image-wrapper img').outerWidth();
	let indexLeft = 0

	$('#btn_left').prop('disabled', true)

  $('#btn_right').on('mousedown touchstart', () => {
    moveLeft()
  }).on('mouseup touchend', () => {
    clearInterval(mouseStillDown)
    mouseStillDown = false
  })

  $('#btn_left').on('mousedown touchstart', () => {
  	moveRight()
  }).on('mouseup touchend', () => {
    clearInterval(mouseStillDown)
    mouseStillDown = false
  })


  function moveLeft() {
	  if (itemSize-indexLeft == maxSize) {
			$('#btn_right').prop('disabled', true)
		} else {
			indexLeft = indexLeft-itemSize
			console.log('indexLeft', indexLeft)
			$('#trusted-image-wrapper').css({'left': indexLeft})
		}
		if (indexLeft < 0) {
			$('#btn_left').prop('disabled', false)
		}
		if (!mouseStillDown) {
			console.log('mouseStillDown')
	    mouseStillDown = setInterval(moveLeft, 300)
	  }
	}

	function moveRight() {
		if (indexLeft == 0) {
			$('#btn_left').prop('disabled', true)
		} else {
			indexLeft = indexLeft+itemSize
			console.log('btn_right', indexLeft)
			$('#trusted-image-wrapper').css({'left': indexLeft})
		}
		if (indexLeft < 0) {
			$('#btn_right').prop('disabled', false)
		}
		if (!mouseStillDown) {
			console.log('mouseStillDown')
	    mouseStillDown = setInterval(moveRight, 300)
	  }
	}
}
