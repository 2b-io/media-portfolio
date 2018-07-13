import $ from 'jquery'

import 'stylus/home.styl'

$(document).ready(function(){
	handleHoldButtons()
})


export function handleHoldButtons() {
	const state = {
		holdLeftButton: false,
		holdRightButton: false
	}

  $('#btn_left')
		.on('mousedown touchstart', () => {
			state.holdLeftButton = true
			state.holdRightButton = false
		})
		.on('mouseup touchend', () => {
			state.holdLeftButton = false
			state.holdRightButton = false
		})

	$('#btn_right')
		.on('mousedown touchstart', () => {
			state.holdLeftButton = false
			state.holdRightButton = true
		})
		.on('mouseup touchend', () => {
			state.holdLeftButton = false
			state.holdRightButton = false
		})

	handleHoldState(state)
}

function handleHoldState(state) {
	const imageWrapper = $('#trusted-image-wrapper')
	const viewport = $('#viewport')

	const wrapperWidth = imageWrapper.outerWidth()
	const viewportWidth = viewport.outerWidth()
	const step = (viewportWidth / 10)

	setInterval(() => {
		if (state.holdLeftButton) {
			const currentLeft = parseInt(imageWrapper.css('left'), 10)

			const desiredLeft = currentLeft - step

			if (desiredLeft + wrapperWidth > viewportWidth) {
				imageWrapper.css('left', desiredLeft)
			} else {
				imageWrapper.css('left', viewportWidth - wrapperWidth)
			}
		} else if (state.holdRightButton) {
			const currentLeft = parseInt(imageWrapper.css('left'), 10)
			const desiredLeft = currentLeft + step

			if (desiredLeft < 0) {
				imageWrapper.css('left', desiredLeft)
			} else {
				imageWrapper.css('left', 0)
			}
		}
	}, 200)
}
