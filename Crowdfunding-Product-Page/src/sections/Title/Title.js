
import React from 'react'

import { Section, Button, Bookmark } from '../../components'

export default function Title() {
	return (
		<Section name="title">
			<h2>Mastercraft Bamboo Monitor Riser</h2>
			<p>A beautiful & handcraft monitor stand to reduce neck and eye strain.</p>
			<div className="title__actions">
				<Button>Back this project</Button>
				<Bookmark />
			</div>
		</Section>
	)
}