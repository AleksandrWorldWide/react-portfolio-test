import css from './NavListItem.module.scss'

export const NavListItem = ({text, key}) => {

	return (
		<li className={css.NavListItem} key={key}>
			<a href="">{text}</a>
		</li>
	)
}