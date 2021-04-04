
import React, { useState, useEffect, useContext } from 'react'
import useAPI from './hooks/useAPI'

import { ProductContext } from './context/Product'
import { ModalContext } from './context/Modals'

import {	Header, Nav } from './components'
import { Title, Progress, Main } from './sections'
import {	CompleteModal,	PledgeModal } from './modals'

export default function App() {
	const [ loaded, setLoaded ] = useState(false)
	const { setProduct } = useContext(ProductContext)
	const { modals } = useContext(ModalContext)

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

			{loaded && content}
			
			{modals.pledge && <PledgeModal />}
			{modals.complete && <CompleteModal />}
		</>
	)
}