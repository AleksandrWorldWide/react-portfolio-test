import css from './Button.module.scss'

export const Button = ({text, type, disabled, onClick}) => {

	const cls = [
		css.Button,
		css[type]
	].join(' ')
	
	return (
		<button className={cls} disabled={disabled} onClick={onClick}>
			{text}
		</button>
	)
}