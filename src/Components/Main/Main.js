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

export const Main = () => {

	

	const [categories, setCategories] = useState(catItems)
	const [cards, setCards] = useState([])
	const [cardLoading, setCardLoading] = useState(false)
	const [offset, setOffset] = useState(9)
	const [id, setId] = useState(0)
	const [nameFilter, setNameFilter] = useState('Show All')
	const [stateDropBox, setStateDropBox] = useState(false)

	
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

	}

	const itemsSlice = (offsetCards = offset) => {
		setCardLoading(false)
		return cardItems.filter(item => item.id < offsetCards).filter(item => nameFilter === 'Show All' ? item : item.category === nameFilter)
	}

	const onRequest = (offset) => {
		setCardLoading(true)
		
		setCards(itemsSlice(offset))
	}

	useEffect(
		() => onRequest(offset)
		,[nameFilter, offset]
	)

	useEffect(()=> {
		setNameFilter(categories[id].category)
	}, [id])

	useEffect(()=> {
		setCategories(
			changeCat(categories)

		)
	}, [id])

// ############ catalog

	const [idCard, setIdCard] = useState(0)

	const cardFilter = (id) => {
		return(
			setIdCard(id)
		)
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
						match={match} 
						items={cards}
						onClick={cardFilter}
						id={idCard}
					/>
				:	<Catalog match={match} items={cards}/>
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