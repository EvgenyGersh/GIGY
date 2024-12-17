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
	}, 400)

	window.addEventListener('scroll', () => {
		// -------- SCROLL-HEADER -----

		function changeHeaderColor() {
			const mainSection = document.querySelector('main')
			const reviewsSection = document.querySelector('.reviews_header')
			const header = document.querySelector('header')
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop
			let mainSectionOffset = mainSection.clientHeight
			let reviewsSectionOffset = reviewsSection.offsetTop

			if (scrollTop <= mainSectionOffset - 130) {
				header.classList.remove('header_about')
			} else {
				header.classList.add('header_about')
			}
			if (
				scrollTop >= reviewsSectionOffset &&
				scrollTop <= reviewsSectionOffset + (reviewsSection.clientHeight - 60)
			) {
				header.classList.add('header_reviews')
			} else {
				header.classList.remove('header_reviews')
			}
		}
		changeHeaderColor()

		// ------ SERVICES-scroll-ANIM---

		function servicesAnim() {
			const scrollServices = document.querySelectorAll('.service_description')
			const scrollImage = document.querySelectorAll('.service_image')
			let windowCenter = window.scrollY + (window.innerHeight / 4) * 3.4
			scrollServices.forEach((item, i) => {
				let itemCenter = item.offsetTop + item.offsetHeight / 2 - 100
				if (windowCenter >= itemCenter) {
					scrollImage.forEach(img => {
						if (img.classList.contains('service_image_active')) {
							img.classList.remove('service_image_active')
						}
						scrollImage[i].classList.add('service_image_active')
					})
				}
			})
		}
		servicesAnim()

		// ------ BUTTONS-SCROLL-ANIM---

		function servicesButtonAnim() {
			const scrollMobileServices = document.querySelectorAll(
				'.service_description_mobile'
			)
			const scrollButton = document.querySelectorAll(
				'.services_mobile_buttons .service_btn'
			)
			let windowCenter = window.scrollY + (window.innerHeight / 4) * 3.9
			// console.log(windowCenter)
			scrollMobileServices.forEach((item, i) => {
				let itemCenter = item.offsetTop + item.offsetHeight / 6.5

				if (windowCenter >= itemCenter) {
					scrollButton.forEach(btn => {
						if (btn.classList.contains('service_btn_active')) {
							btn.classList.remove('service_btn_active')
						}
						scrollButton[i].classList.add('service_btn_active')
					})
				}
			})
		}
		servicesButtonAnim()

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
				}, 1500)
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
		let tabs = document.querySelectorAll('.reviews_switch')

		let tabsContent = document.querySelectorAll('.reviews_content')

		// let labelTransform = document.querySelector('.label_anim')

		// function labelAnim() {
		// 	tabs.forEach(tab => {
		// 		tab.addEventListener('click', e => {

		// 			labelTransform.classList.remove('label_btn_active')
		// 			// labelTransform.classList.add('label_btn_active')

		// 		})
		// 	})
		// }

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
						// labelAnim()
						showTabContent(i)
					}
				})
			})
		})
	}

	reviewsTabs()

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

	// ------- MENU, MOBILE-MENU ------

	const mobile = document.querySelector('.mobile_menu')
	const mobileOpenBtn = document.querySelector('.open_menu')
	const mobileCloseBtn = document.querySelector('.close_menu')

	mobileOpenBtn.addEventListener('click', () => {
		mobile.classList.add('show_mobile_menu')
		mobile.classList.remove('hide_mobile_menu')
		document.body.style.overflow = 'hidden'
	})

	const closeMobile = () => {
		setTimeout(() => {
			mobile.classList.add('hide_mobile_menu')
			mobile.classList.remove('show_mobile_menu')
			document.body.style.overflow = ''
		}, 300)
	}

	mobileCloseBtn.addEventListener('click', closeMobile)

	mobile.addEventListener('click', e => {
		if (e.target === mobile) {
			closeMobile()
		}
		console.log(e.target)
	})

	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && mobile.classList.contains('show_mobile_menu')) {
			closeMobile()
		}
	})

	const activeLinks = document.querySelectorAll('a[href^="#"]')
	const link = document.querySelectorAll('.header_link a')
	const linkHide = document.querySelectorAll('.link_block a')

	activeLinks.forEach((item, i) => {
		item.addEventListener('click', e => {
			event.preventDefault()
			const blockId = item.getAttribute('href')

			document.querySelector('' + blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})

			link.forEach(elem => {
				elem.classList.remove('active')
			})
			linkHide.forEach(elem => {
				elem.classList.remove('active')
			})

			item.classList.add('active')
			closeMobile()
		})
	})

	// --------- SLIDER ----------

	function initSlider() {
		const slider = document.querySelector('.cards_wrap')
		const slides = document.querySelectorAll('.main_card')
		const container = document.querySelector('.card_block')

		if (window.innerWidth < 769) {
			slides.forEach(slide => {
				const clone = slide.cloneNode(true)
				slider.appendChild(clone)
			})

			slider.style.animation = 'scroll 8s linear infinite'
		} else {
			slider.style.animation = 'none'
		}
	}

	window.addEventListener('load', initSlider)
	window.addEventListener('resize', initSlider)
})
