import $ from 'jquery'

import 'stylus/home.styl'

$(document).ready(function(){
	handleHoldButtons()
})

function handleHoldButtons() {
	let holdLeftButton = false
	let holdRightButton = false
  let maxSize = $('#trusted-image-wrapper').outerWidth()
	let itemSize = $('#trusted-image-wrapper img').outerWidth();
	let indexLeft = 0

  $('#btn_right').on('mousedown touchstart', () => {
  	if (!holdRightButton) {
	    holdRightButton = setInterval(moveLeft, 300)
	    moveLeft()
	  }
  }).on('mouseup touchend', () => {
    clearInterval(holdRightButton)
    holdRightButton = false
  })

  $('#btn_left').on('mousedown touchstart', () => {
  	if (!holdLeftButton) {
	    holdLeftButton = setInterval(moveRight, 300)
	    moveRight()
	  }

  }).on('mouseup touchend', () => {
    clearInterval(holdLeftButton)
    holdLeftButton = false
  })


  function moveLeft() {
	  if (itemSize-indexLeft == maxSize) {
	  	clearInterval(holdRightButton)
			$('#btn_right').prop('disabled', true)
		} else {
			indexLeft = indexLeft-itemSize
			$('#trusted-image-wrapper').css({'left': indexLeft})
		}
		if (indexLeft < 0) {
			$('#btn_left').prop('disabled', false)
		}

	}

	function moveRight() {
		if (indexLeft == 0) {
			clearInterval(holdLeftButton)
			$('#btn_left').prop('disabled', true)
		} else {
			indexLeft = indexLeft+itemSize
			$('#trusted-image-wrapper').css({'left': indexLeft})
		}
		if (indexLeft < 0) {
			$('#btn_right').prop('disabled', false)
		}

	}
}
