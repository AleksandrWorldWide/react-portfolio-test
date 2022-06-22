import css from './NavBar.module.scss'
import { Logo } from '../Logo/Logo'
import { Button } from '../Button/Button'
import { NavList } from '../NavList/NavList'

export const NavBar = ({match}) => {

const show = match==='' ? true : false
const items = ['About', 'Services', 'Pricing', 'Blog']

	return (
		<nav className={css[`NavBar${match}`]}>
			<Logo/>
			{
				show && <NavList items={items}/>
			}
			{
				show && <Button text={'Contact'} type={'dark'}/>
			}
			
			
		</nav>
	)
}