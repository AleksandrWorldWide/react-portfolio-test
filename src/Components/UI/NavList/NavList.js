import css from './NavList.module.scss'
import { NavListItem } from '../NavListItem/NavListItem'
import { generate } from 'shortid'

export const NavList = ({items}) => {

	
	return (
		<nav className={css.NavList}>
				{
					items.map((item) => {
						return (
							<NavListItem
								text={item}
								key={generate.shortid}
							/>
						)
					})
				}
		</nav>
	)
}