import getData from './getData.js'
import renderGoods from './renderGoods.js'
import { categoryFilter } from './filter.js'

const catalog = () => {
	const btnCatalog = document.querySelector('.catalog-button > button')
	const catalogModal = document.querySelector('.catalog')
	const catalogModalItem = document.querySelectorAll('.catalog li')

	let isOpen = false

	btnCatalog.addEventListener('click', () => {
		isOpen = !isOpen
		if (isOpen) {
			catalogModal.style.display = 'block'
		} else {
			catalogModal.style.display = ''
		}
	})

	catalogModalItem.forEach((item) => {
		item.addEventListener('click', () => {
			const text = item.textContent
			getData().then((data) => {
				renderGoods(categoryFilter(data, text))
			})
		})
	})
}

export default catalog
