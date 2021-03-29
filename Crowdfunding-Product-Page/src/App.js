
import React, { useState, useEffect, createContext } from 'react'
import useAPI from './hooks/useAPI'
import useProduct from './hooks/useProduct'

import {
	Header,
	Nav
} from './components'

import {
	Title,
	Progress,
	Main
} from './sections'

const ProductContext = createContext()

export default function App() {
	const [ loaded, setLoaded ] = useState(false)
	const [ apiData, setApiData ] = useState({})
	const { updateProduct, setProduct } = useProduct()

	useEffect(() => {
		useAPI()
			.then(data => setApiData())
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

			<ProductContext.Provider value={apiData}>
				{
					loaded ? content : 'Loading...'
				}
			</ProductContext.Provider>
			
		</>
	)
}