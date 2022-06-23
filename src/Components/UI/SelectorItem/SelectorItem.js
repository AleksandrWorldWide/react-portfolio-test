import css from './SelectorItem.module.scss'
import shortid from 'shortid'
import { useState } from 'react'

export const SelectorItem = ({text, onClick}) => {

	

	return (
		<li className={css.SelectorItem} key={shortid.generate()}>
			<a href="" onClick={onClick}>{text}</a>
		</li>
	)
}