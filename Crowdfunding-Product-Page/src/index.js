
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Product } from './context/Product'

ReactDOM.render(
	<Product>
		<App />
	</Product>
	, document.getElementById('root')
)