import css from './Selector.module.scss'
import { SelectorItem } from '../SelectorItem/SelectorItem'
import { useState } from 'react'

export const Selector = ({items}) => {


	const [state, setState] = useState(false)

	const onClick = (e) => {
		e.preventDefault()
		setState(!state)
		return (
			console.log(state)
		)
	}

	return (
		<div className={css.Selector}>
			{
				items.map(item => {

					return (
						<SelectorItem
							text={item}
							onClick={onClick}
						/>
					)
				})
			}
		</div>
	)
}