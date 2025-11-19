import getData from './getData.js'
// import postData from './postData.js'
import renderGoods from './renderGoods.js'

const load = () => {
	// const cartBtn = document.querySelector('#cart')

	getData().then((data) => {
		renderGoods(data)
	})

	// cartBtn.addEventListener('click', () => {
	// 	postData().then((data) => {
	// 		console.log(data)

	// 		getData().then((data) => console.log(data))
	// 	})
	// })
}

export default load
