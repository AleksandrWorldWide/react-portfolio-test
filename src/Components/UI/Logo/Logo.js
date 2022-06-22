import css from './Logo.module.scss'
import logoName from '../../../Assets/Icons/logo.svg'

export const Logo = () => {

	return (
		<div className={css.Logo}>
			<img src={logoName} alt='logo' />
			<span>Agency</span>
		</div>
	)
}