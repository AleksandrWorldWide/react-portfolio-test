import css from './DropBox.module.scss'
import { DropBoxItem } from '../DropBoxItem/DropBoxItem'
import arrow from '../../../Assets/Icons/arrow.svg'

export const DropBox = ({items}) => {

	return (
		<div className={css.DropBox}>
			<img src={arrow} alt="arrow" className={css.show}/>
			{
				items.map(item => {

					return (
						<DropBoxItem
							text={item}
						/>
					)
				})
			}
		</div>
	)
}