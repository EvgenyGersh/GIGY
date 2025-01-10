document.addEventListener('DOMContentLoaded', () => {
	const changeOn = document.querySelector('.change_on')
	const changeOff = document.querySelector('.change_off')
	const labelOn = document.querySelector('.label_on')
	const labelOff = document.querySelector('.label_off')
	const changeLabelAnim = document.querySelector('.label_change_btn')

	changeOn.addEventListener('click', () => {
		changeLabelAnim.classList.add('label_btn_active')
		labelOff.classList.remove('change_prg_active')
		labelOn.classList.add('change_prg_active')
	})

	changeOff.addEventListener('click', () => {
		changeLabelAnim.classList.remove('label_btn_active')
		labelOff.classList.add('change_prg_active')
		labelOn.classList.remove('change_prg_active')
	})
})
