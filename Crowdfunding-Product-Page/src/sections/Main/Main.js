
import React from 'react'

import useProduct from '../../hooks/useProduct'
import { Section, Pledge } from '../../components'

export default function Main() {
	const { product } = useProduct()

	return (
		<Section name="main">
			<h2>About this project</h2>
			{product.description}

			{
				product.tiers.map(tier => <Pledge key={`tier_${tier.id}`} tier={tier.id} />)
			}
		</Section>
	)
}