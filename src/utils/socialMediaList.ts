import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import whatsapp from '../assets/svg/whatsapp.svg'
import phone from '../assets/svg/phone.svg'

interface SocialMediaType {
	svg: string
	alt: string
	link: string
}

const socialMediaList: SocialMediaType[] = [
	{svg: facebook, alt: 'facebook', link: 'http://www.facebook.com'},
	{svg: instagram, alt: 'instagram', link: 'http://www.instagram.com'},
	{svg: whatsapp, alt: 'whatsapp', link: 'http://www.whatsapp.com'},
	{svg: phone, alt: 'phone', link: 'http://www.facebook.com'}
]

export {socialMediaList, SocialMediaType}