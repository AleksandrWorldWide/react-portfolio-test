import css from './Selector.module.scss'
import { SelectorItem } from '../SelectorItem/SelectorItem'
import { useState } from 'react'

export const Selector = ({items, onClick, id}) => {

	

	return (
		<div className={css.Selector}>
			{
				items.map(item => {
					const isActive = item.id === id ? true : false
					return (
						<SelectorItem
							text={item.category}
							isActive={isActive}
							onClick={() => onClick(item.id)}
						/>
					)
				})
			}
		</div>
	)
}