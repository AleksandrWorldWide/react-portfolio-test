import css from './CatalogItem.module.scss'
import shortid from 'shortid'

export const CatalogItem = ({category, title, subtitle}) => {

	return (
		<div className={css.CatalogItem} key={shortid.generate()}>
			<img src={require(`../../../Assets/Images/${title}.png`)} alt={title} />
			<div className={css.body}>
				<a href='' className={css.category}>
					{category}
				</a>
				<span className={css.title}>
					{title+subtitle}
				</span>
			</div>
		</div>
	)
}