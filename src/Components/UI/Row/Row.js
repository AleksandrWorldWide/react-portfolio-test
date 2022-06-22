import css from './Row.module.scss'

export const Row = ({height, text}) => {

	const rowStyle = {marginTop: `${height}px`}
	return (
		<div className={css.Row} style={rowStyle}>
			{text && <p>{text}</p>}
		</div>
	)
}