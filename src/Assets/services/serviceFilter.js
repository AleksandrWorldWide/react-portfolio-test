export const changeCat = (items) => {
	const newItems = items.filter(item => item.category !== nameFilter)
	const obj = items.filter(item => item.category === nameFilter)[0]
	return (
		[...newItems, {...obj, isActive: true}].sort((a,b) => a.id - b.id)
	)
}




const catFilter = (id) => {

		setId(id)
		setStateDropBox(!stateDropBox)

}



const itemsSlice = (offsetCards = offset) => {
	setCardLoading(false)
	return cardItems.filter(item => item.id < offsetCards).filter(item => nameFilter === 'Show All' ? item : item.category === nameFilter)
}

const onRequest = (offset) => {
	setCardLoading(true)
	
	setCards(itemsSlice(offset))
}