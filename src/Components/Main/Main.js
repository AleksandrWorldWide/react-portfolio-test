import css from './Main.module.scss'
import { Selector } from '../UI/Selector/Selector'
import { Catalog } from '../UI/Catalog/Catalog'
import { Button } from '../UI/Button/Button'
import { Row } from '../UI/Row/Row'
import { DropBox } from '../UI/DropBox/DropBox'
import Media from 'react-media'

export const Main = () => {

	function View (match = '') {
		
		return (
			<div className={css.Main}>
				{match === '' ? <Selector/> : <DropBox/>}
				<Catalog/>
				<Button text={'Load More'} type={'light'}/>
				<Row height={184}/>
			</div>
		)
	}

	return (
		<div className={css.Main}>
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
		</div>
	)
}