
import React, { useState, useEffect, useContext } from 'react'
import useAPI from './hooks/useAPI'

import { ProductContext } from './context/Product'

import {
	Header,
	Nav
} from './components'

import {
	Title,
	Progress,
	Main
} from './sections'

export default function App() {
	const [ loaded, setLoaded ] = useState(false)
	const { setProduct } = useContext(ProductContext)

	useEffect(() => {
		useAPI()
			.then(data => setProduct(data))
			.then(() => setLoaded(true))
	}, [])

	const content = (
		<>
			<Title />
			<Progress />
			<Main />
		</>
	)

	return (
		<>
			<Header>
				<Nav />
			</Header>
			{
				loaded ? content : 'Loading...'
			}
		</>
	)
}