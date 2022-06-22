import css from './CatalogItem.module.scss'

export const CatalogItem = ({category, title}) => {

	return (
		<div className={css.CatalogItem}>
			<img src={require(`../../../Assets/Images/${title}.png`)} alt={title} />
			<div className={css.body}>
				<span className={css.category}>
					{category}
				</span>
				<span className={css.title}>
					{title}
				</span>
			</div>
		</div>
	)
}