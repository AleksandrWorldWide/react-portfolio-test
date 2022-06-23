import css from './DropBoxItem.module.scss'
import shortid from 'shortid'

export const DropBoxItem = ({text, onClick, isActive}) => {

	const cls = [
		css.DropBoxItem,
		css[isActive ? 'green' : 'red']
	]

	return (
		<li className={cls.join(' ')} key={shortid.generate()} onClick={onClick}>
			{text}
		</li>
	)
}