import css from './Catalog.module.scss'
import { CatalogItem } from '../CatalogItem/CatalogItem'

export const Catalog = ({match, items, onClick, id}) => {

	
	return (
		<div className={css.Catalog}>
			{
				items.map(item => {
					const select = item.id === id ? 'selected' : null
					return (
						<CatalogItem
							select={select}
							category={item.category}
							title={item.title}
							subtitle={item.subtitle}
							onClick={()=> onClick(item.id)}
						/>
					)
					
				})
			}
		</div>
	)
}