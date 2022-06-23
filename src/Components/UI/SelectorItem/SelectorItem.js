import css from './SelectorItem.module.scss'
import shortid from 'shortid'

export const SelectorItem = ({text, onClick, isActive}) => {

	const cls = [
		css.SelectorItem,
		css[isActive ? 'green' : 'red']
	]

	return (
		<li className={cls.join(' ')} key={shortid.generate()} onClick={onClick}>
			{text}
		</li>
	)
}