import React, {useState} from 'react'
import classes from './Search.module.css'
import searchSvg from '../../../assets/svg/search.svg'
import eraserSvg from '../../../assets/svg/eraser.svg'

const Search = (props) => {

	const [value, setValue] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const maxLength = props.maxLength || 25

	let inputWrapperClasses
	if (!errorMessage) {
		inputWrapperClasses = classes.inputWrapper
	} else {
		inputWrapperClasses = classes.inputWrapper + ' ' + classes.inputError
	}
	return (
		<div className={classes.search}>
			<div className={inputWrapperClasses}>
				<input
					placeholder={props.placeholder}
					className={classes.input}
					value={value}
					onChange={(event) => {
						if (event.target.value.length <= maxLength) {
							setValue(event.target.value)
							setErrorMessage('')
						} else {
							setErrorMessage('Слишком длинный запрос')
						}
					}}
				/>
				{value ?
					<img className={classes.eraser} src={eraserSvg} alt={'x'} onClick={() => {
						setErrorMessage('')
						setValue('')
					}
					}/>
					:
					<img className={classes.searchIcon} src={searchSvg} alt={'find'}/>
				}
			</div>
			<div className={classes.errorMessage}>{errorMessage}</div>
		</div>

	)
}

export default Search