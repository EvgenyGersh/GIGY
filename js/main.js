document.addEventListener('DOMContentLoaded', () => {
	// ------- MAIN ANIM -----
	setTimeout(() => {
		setTimeout(() => {
			document
				.querySelector('.card_left_primary')
				.classList.add('left_primary_active')
			document
				.querySelector('.card_right_primary')
				.classList.add('right_primary_active')
		}, 300)

		document
			.querySelector('.card_left_secondary')
			.classList.add('left_secondary_active')
		document
			.querySelector('.card_right_secondary')
			.classList.add('right_secondary_active')
	}, 500)

	window.addEventListener('scroll', () => {
		// ------ SERVICES-scroll-ANIM---
		function servicesAnim() {
			const scrollServices = document.querySelectorAll('.service_description')
			const scrollImage = document.querySelectorAll('.service_image')
			let windowCenter = window.scrollY + window.innerHeight / 2
			scrollServices.forEach((item, i) => {
				let itemCenter = item.offsetTop + item.offsetHeight / 2 - 100
				if (windowCenter >= itemCenter) {
					scrollServices[i]
						? scrollImage[i].classList.add('service_image_active')
						: null
				} else {
					scrollImage[i].classList.remove('service_image_active')
				}
				// console.log(scrollServices[1].itemCenter)
			})
			scrollImage[0].classList.add('service_image_active')
		}
		servicesAnim()
		// ------ REVIEWS-BOTTOM-SCROLL-ANIM---
		function reviewsBottomAnime() {
			const reviews = document.querySelector('.reviews')
			const reviewsFooter = document.querySelector('.reviews_footer')
			reviews
			const triggerBottom = (window.innerHeight / 5) * 1.1
			const reviewsTop = reviews.getBoundingClientRect().top

			if (reviewsTop < triggerBottom) {
				setTimeout(() => {
					reviewsFooter.classList.add('reviews_footer_active')
				}, 2000)
			} else {
				reviewsFooter.classList.remove('reviews_footer_active')
			}
		}
		reviewsBottomAnime()
		// ------ FAQ-IMG-PEOPLE-SCROLL-ANIM---
		function faqImageAnim() {
			const imageAnim = document.querySelector('.image_anim')
			const triggerBottom = (window.innerHeight / 5) * 2.8
			const imgTop = imageAnim.getBoundingClientRect().top

			if (imgTop < triggerBottom) {
				imageAnim.classList.add('image_anim_active')
			} else {
				imageAnim.classList.remove('image_anim_active')
			}
		}
		faqImageAnim()
	})

	// ------- Reviews Tabs ---
	function reviewsTabs() {
		let tabs = document.querySelectorAll('.butt_prg')

		let tabsContent = document.querySelectorAll('.reviews_content')

		let labelTransform = document.querySelector('.label_anim')

		function labelAnim() {
			labelTransform.classList.toggle('label_btn_active')
		}

		function hideTabContent() {
			tabsContent.forEach(item => {
				item.classList.add('hide')
				item.classList.remove('show')
			})
			tabs.forEach(item => {
				item.classList.remove('active')
			})
		}

		function showTabContent(i) {
			tabsContent[i].classList.add('show')
			tabsContent[i].classList.remove('hide')
			tabs[i].classList.add('active')
		}
		hideTabContent()
		showTabContent(0)

		tabs.forEach(item => {
			item.addEventListener('click', event => {
				const target = event.target

				tabs.forEach((item, i) => {
					if (target === item) {
						hideTabContent()
						labelAnim()
						showTabContent(i)
					}
				})
			})
		})
	}

	reviewsTabs()

	// function tabs() {
	// 	let tabs = document.querySelectorAll('.butt_prg')

	// 	let tabsContent = document.querySelectorAll('.reviews_content')

	// 	let labelTransform = document.querySelector('.label_btn')

	// 	function labelAnim() {
	// 		labelTransform.classList.toggle('label_btn_active')
	// 	}

	// 	function hideTabContent() {
	// 		tabsContent.forEach(item => {
	// 			item.classList.add('hide')
	// 			item.classList.remove('show')
	// 		})
	// 		tabs.forEach(item => {
	// 			item.classList.remove('active')
	// 		})
	// 	}

	// 	function showTabContent(i) {
	// 		tabsContent[i].classList.add('show')
	// 		tabsContent[i].classList.remove('hide')
	// 		tabs[i].classList.add('active')
	// 	}
	// 	hideTabContent()
	// 	showTabContent(0)

	// 	tabs.forEach(item => {
	// 		item.addEventListener('click', event => {
	// 			const target = event.target

	// 			tabs.forEach((item, i) => {
	// 				if (target === item) {
	// 					hideTabContent()
	// 					labelAnim()
	// 					showTabContent(i)
	// 				}
	// 			})
	// 		})
	// 	})
	// }

	// tabs()

	// ------- FAQ Tabs ---

	const accordions = document.querySelectorAll('.faq_item')

	const openAccordion = accordion => {
		const content = accordion.querySelector('.faq_answer')
		accordion.classList.add('faq_item_active')
		content.style.maxHeight = 90 + 'px'
	}

	const closeAccordion = accordion => {
		const content = accordion.querySelector('.faq_answer')
		accordion.classList.remove('faq_item_active')
		content.style.maxHeight = null
	}

	accordions.forEach(accordion => {
		const intro = accordion.querySelector('.faq_question')
		const content = accordion.querySelector('.faq_answer')

		intro.onclick = () => {
			if (content.style.maxHeight) {
				closeAccordion(accordion)
			} else {
				accordions.forEach(accordion => closeAccordion(accordion))
				openAccordion(accordion)
			}
		}
	})
})
