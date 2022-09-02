import React from 'react'
import {socialMediaList} from '../utils/socialMediaList'
import SocialMedia from './SocialMedia'
import classes from './HeaderInfo.module.css'
import SelectLang from './SelectLang'


const phone = '+(373) 22 83-87-87'
const menuItems = ['RU', 'ENG', 'MOL']

const HeaderInfo = () => {

	return (
		<div className={classes.footer}>
			<div className={classes.contact}>
				<div className={classes.phone}>
					{phone}
				</div>
				<div className={classes.socialMedia}>
					{socialMediaList.map((media, key) => {
						return <SocialMedia
							key={key}
							className={classes.media}
							svg={media.svg}
							alt={media.alt}
							link={media.link}
						/>
					})}
				</div>
			</div>
			<SelectLang menu={menuItems}/>
		</div>
	)
}

export default HeaderInfo