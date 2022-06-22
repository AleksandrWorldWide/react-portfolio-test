import css from './SelectorItem.module.scss'

export const SelectorItem = ({text, key}) => {

	return (
		<li className={css.SelectorItem} key={key}>
			<a href="">{text}</a>
		</li>
	)
}