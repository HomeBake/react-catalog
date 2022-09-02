import React from 'react'
import {SocialMediaType} from "../utils/socialMediaList";

interface Props extends SocialMediaType {
	className: string
	key: number

}

const SocialMedia = ({svg, link, alt, className}: Props) => {
	return (
		<img
			className={className}
			src={svg}
			alt={alt}
			onClick={() => window.location.replace(link)}
		/>
	)
}


export default SocialMedia