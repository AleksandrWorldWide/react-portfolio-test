import css from './NavList.module.scss'
import { NavListItem } from '../NavListItem/NavListItem'

export const NavList = ({items}) => {

	return (
		<nav className={css.NavList}>
				{
					items.map((item) => {
						return (
							<NavListItem
								text={item}
							/>
						)
					})
				}
		</nav>
	)
}