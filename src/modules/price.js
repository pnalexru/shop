import getData from './getData.js'
import renderGoods from './renderGoods.js'
import { priceFilter } from './filter.js'

const price = () => {
	const minEl = document.querySelector('#min')
	const maxEl = document.querySelector('#max')

	let min = 0
	let max = 0
	let maxGoods = 0
	getData()
		.then((data) => {
			data.forEach((good) => {
				if (good.price > maxGoods) {
					maxGoods = good.price
				}
			})
		})
		.then((maxGoods) => console.log(maxGoods))
		.then(() => {
			console.log(maxGoods)
			minEl.value = min
			maxEl.value = maxGoods
		})
		.then(() => {
			minEl.addEventListener('input', (event) => {
				if (minEl.value === '') {
					minEl.placeholder = 0
					min = 0
				} else min = event.target.value
				getData().then((data) => {
					renderGoods(priceFilter(data, min, max))
				})
			})
			maxEl.addEventListener('input', (event) => {
				if (maxEl.value === '') {
					maxEl.placeholder = maxGoods
					max = maxGoods
				} else max = event.target.value
				getData().then((data) => {
					renderGoods(priceFilter(data, min, max))
				})
			})
		})

	// min.addEventListener('input', (event) => {
	// 	const value = event.target.value
	// 	getData().then((data) => {
	// 		renderGoods(searchFilter(data, value))
	// 	})
	// })
}

export default price
