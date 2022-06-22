import css from './Catalog.module.scss'
import { CatalogItem } from '../CatalogItem/CatalogItem'
import { generate } from 'shortid'

export const Catalog = () => {

	const items = [
		{
			category: 'Design',
			title: 'SOFA'
		},
		{
			category: 'Branding',
			title: 'KeyBoard'
		},
		{
			category: 'Illustration',
			title: 'Work Media'
		},
		{
			category: 'Motion',
			title: 'DDDone'
		},
		{
			category: 'Design',
			title: 'Abstract'
		}
		,{
			category: 'Branding',
			title: 'HandP'
		}
		,{
			category: 'Motion',
			title: 'Architect'
		}
		,{
			category: 'Design',
			title: 'CalC'
		}
		,{
			category: 'Branding',
			title: 'Sport'
		}
	]

	return (
		<div className={css.Catalog}>
			{
				items.map(item => {
					return (
						<CatalogItem
							category={item.category}
							title={item.title}
							key={generate.shortid}
						/>
					)
					
				})
			}
		</div>
	)
}