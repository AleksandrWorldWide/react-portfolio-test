import css from './Catalog.module.scss'
import { CatalogItem } from '../CatalogItem/CatalogItem'

export const Catalog = ({match, items}) => {

	

	return (
		<div className={css.Catalog}>
			{
				items.map(item => {
					
					return (
						<CatalogItem
							category={item.category}
							title={item.title}
							subtitle={item.subtitle}
						/>
					)
					
				})
			}
		</div>
	)
}