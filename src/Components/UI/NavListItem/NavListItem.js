import css from './NavListItem.module.scss'
import shortid from 'shortid'

export const NavListItem = ({text}) => {
	return (
		<li className={css.NavListItem} key={shortid.generate()}>
			<a href="">{text}</a>
		</li>
	)
}