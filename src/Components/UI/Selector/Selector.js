import css from './Selector.module.scss'
import { SelectorItem } from '../SelectorItem/SelectorItem'
import { generate } from 'shortid'

export const Selector = () => {

	const items = ['Show All','Design','Branding','Illustration','Motion']
	return (
		<div className={css.Selector}>
			{
				items.map(item => {

					return (
						<SelectorItem
							text={item}
							key={generate.shortid}
						/>
					)
				})
			}
		</div>
	)
}