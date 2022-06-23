import css from './Main.module.scss'
import { Selector } from '../UI/Selector/Selector'
import { Catalog } from '../UI/Catalog/Catalog'
import { Button } from '../UI/Button/Button'
import { Row } from '../UI/Row/Row'
import { DropBox } from '../UI/DropBox/DropBox'
import Media from 'react-media'
import { items as cardItems } from '../../Assets/data/data'
import { useEffect, useState } from 'react'

export const Main = () => {

	const [cards, setCards] = useState([])
	const [cardLoading, setCardLoading] = useState(false)
	const [offset, setOffset] = useState(9)

	const itemsSlice = (offsetCards = offset) => {
		setCardLoading(false)
		return cardItems.filter(item => item.id < offsetCards)
	}

	const onRequest = (offset) => {
		setCardLoading(true)
		setOffset(offset + 9)
		setCards(itemsSlice(offset))
	}

	useEffect(
		() => onRequest(offset)
		,[]
	)


	function View (match = '') {
		const items = ['Show All','Design','Branding','Illustration','Motion']
		
		return (
			<div className={css.Main}>
				{match === '' ? <Selector items={items}/> : <DropBox items={items}/>}
				<Catalog match={match} items={cards}/>
				<Button text={'Load More'} type={'light'} disabled={cardLoading} onClick={() => onRequest(offset)}/>
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