
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Product } from './context/Product'
import { Modals } from './context/Modals'

ReactDOM.render(
	<Product>
		<Modals>
			<App />
		</Modals>
	</Product>
	, document.getElementById('root')
)