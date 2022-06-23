import css from './DropBox.module.scss'
import { DropBoxItem } from '../DropBoxItem/DropBoxItem'
import arrow from '../../../Assets/Icons/arrow.svg'
import { useState } from 'react'

export const DropBox = ({stateDropBox, onClick, id, items, nameFilter}) => {

	const filterItems = stateDropBox ? items : new Array(items[0])

	const cls = filterItems.length !== 1 ? 'show' : ''

	return (
		<div className={css.DropBox}>
			<img src={arrow} alt="arrow" className={css[cls]}/>
			{
				filterItems.map(item => {
					const isActive = item.id === id ? true : false
					const value = filterItems.length === 1 ? nameFilter : item.category
					return (
						<DropBoxItem
							text={value}
							isActive={isActive}
							onClick={() => onClick(item.id)}
						/>
					)
				})
			}
		</div>
	)
}