import React from 'react'


const SocialMedia = ({svg, link, alt, className}) => {
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