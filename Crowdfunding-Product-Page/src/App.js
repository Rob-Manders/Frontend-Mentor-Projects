
import React, { useState, useEffect } from 'react'

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
	return (
		<>
			<Header>
				<Nav />
			</Header>
			
			<Title />
			<Progress />
			<Main />
		</>
	)
}