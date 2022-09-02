import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ContextProvider from './component/ContextProvider'

const rootElement = document.getElementById('root')


const root = rootElement ? ReactDOM.createRoot(rootElement) : null

if (root) {
	root.render(
		<ContextProvider>
			<App/>
		</ContextProvider>
	)
}

else {
	console.log("Нет корневого элемента")
}


