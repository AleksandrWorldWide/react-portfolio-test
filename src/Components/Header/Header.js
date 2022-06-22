import css from './Header.module.scss'
import { NavBar } from '../UI/NavBar/NavBar'
import Media  from 'react-media'


export const Header = () => {

	function View (match = '') {
		
		return (
			<div className={css.Header}>
				<NavBar 
					match={match} 
				/>
				<div className={css.block}>
					<h1 className={css[`title${match}`]}>Portfolio</h1>
				</div>
				<div className={css[`subtitle${match}`]}>
					<p>Agency provides a full service range including technical skills, design, business understanding.</p>
				</div>
			</div>
		)
	}

	return (
			<Media queries={{
         	mobile: "(min-width: 1040px)"
        	}}>
				{matches => {
					return (
						<>
							 {matches.mobile ? View() : View('_mobile')}
						</>
          )}}
			</Media>

	)
}

