import css from './DropBoxItem.module.scss'
import shortid from 'shortid'

export const DropBoxItem = ({text}) => {

	return (
		<li className={css.DropBoxItem} key={shortid.generate()}>
			<a href="">{text}</a>
		</li>
	)
}