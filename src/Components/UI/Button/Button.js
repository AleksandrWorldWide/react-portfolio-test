import css from './Button.module.scss'

export const Button = ({text, type}) => {
	
	const cls = [
		css.Button,
		css[type]
	].join(' ')
	
	return (
		<button className={cls}>
			{text}
		</button>
	)
}