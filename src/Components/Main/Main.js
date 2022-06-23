import css from './Main.module.scss'
import { Selector } from '../UI/Selector/Selector'
import { Catalog } from '../UI/Catalog/Catalog'
import { Button } from '../UI/Button/Button'
import { Row } from '../UI/Row/Row'
import { DropBox } from '../UI/DropBox/DropBox'
import Media from 'react-media'
import { items as cardItems } from '../../Assets/data/data'
import { categories as catItems} from '../../Assets/data/categories'
import { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress'
import { usePrevious } from '../../Assets/Hooks/usePrevious'

export const Main = () => {

	

	const [categories, setCategories] = useState(catItems)
	const [cards, setCards] = useState([])
	const [cardLoading, setCardLoading] = useState(false)
	const [offset, setOffset] = useState(9)
	const [id, setId] = useState(0)
	const [nameFilter, setNameFilter] = useState('Show All')
	const [stateDropBox, setStateDropBox] = useState(false)


	const prevOffset = usePrevious(offset)

	
// ############ select

	const changeCat = (items) => {
		const newItems = items.filter(item => item.category !== nameFilter)
		const obj = items.filter(item => item.category === nameFilter)[0]
		return (
			[...newItems, {...obj, isActive: true}].sort((a,b) => a.id - b.id)
		)
	}

	const catFilter = (id) => {

			setId(id)
			setStateDropBox(!stateDropBox)
			setIdCard(null)

	}

	const itemsSlice = (offset, prevOffset) => {
		setCardLoading(false)
		return cardItems.filter(item => (item.id < offset && item.id >= prevOffset))
	}

	const itemsFiltered = (cards) => {
		return (
			cards.filter(item => nameFilter === 'Show All' ? item : item.category === nameFilter)
		)
	}

	const onRequest = (offset) => {
		setCardLoading(true)
		if (cards.length === 0) {
			setCards(itemsSlice(offset, prevOffset))
		} else {
			setCards(cards.concat(itemsSlice(offset, prevOffset)))
		}
		
	}

	useEffect(
		() => onRequest(offset)
		,[offset]
	)

	useEffect(()=> {
		setNameFilter(categories[id].category)
	}, [id])

	useEffect(()=> {
		setCategories(
			changeCat(categories)
		)
	}, [id, nameFilter])



// ############ catalog

	const [idCard, setIdCard] = useState(null)

	const cardFilter = (id) => {
		return (
			id === idCard ? setIdCard(null) : setIdCard(id)
		)
	} 

	const deleteCard = (items, id) => {
		
		return(
			items.filter(item => item.id !== id)
		)
	}

	useKeypress('Delete', () => setCards(deleteCard(cards, idCard)))

	// ########### card

	const catClick = (category) => {
		setNameFilter(category)
			
	}
	

	function View (match = '') {
	
		return (
			<div className={css.Main}>
				{match === '' 
				? <Selector 
						items={categories} 
						id={id}
						onClick={catFilter}
					/> 
				: <DropBox 
						stateDropBox={stateDropBox}
						items={categories}
						nameFilter={nameFilter}
						id={id}
						onClick={catFilter}
					/>
				}
				{match === '' 
				?	<Catalog 
						items={itemsFiltered(cards)}
						onClick={cardFilter}
						catClick={catClick}
						id={idCard}
					/>
				:	<Catalog items={itemsFiltered(cards)}/>
				}
				<Button text={'Load More'} type={'light'} disabled={cardLoading} onClick={() => setOffset(offset + 9)}/>
				<Row height={184}/>
			</div>
		)
	}

	return (
		<div className={css.Main}>
			<Media queries={{
         	mobile: "(min-width: 1040px)"
        	}}>
				{matches => {
					return (
						<>
							 {matches.mobile ? View() : View('_mobile')}
						</>
          )}}
			</Media>
		</div>
	)
}