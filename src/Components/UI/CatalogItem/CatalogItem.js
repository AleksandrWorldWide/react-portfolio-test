import css from './CatalogItem.module.scss'
import shortid from 'shortid'

export const CatalogItem = ({category, title, subtitle, select, onClick, catClick}) => {

	const cls = [
		css.CatalogItem,
		css[select ? 'selected' : null]
	]

	return (
		<div className={cls.join(' ')} key={shortid.generate()} onClick={onClick}>
			<img src={require(`../../../Assets/Images/${title}.png`)} alt={title} />
			<div className={css.body}>
				<div className={css.category} onClick={catClick}>
					{category}
				</div>
				<span className={css.title}>
					{title+subtitle}
				</span>
			</div>
		</div>
	)
}