export const searchFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		const titleUpper = goodsItem.title.toUpperCase()
		return titleUpper.includes(value.toUpperCase())
	})
}

export const categoryFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		return goodsItem.category === value
	})
}
