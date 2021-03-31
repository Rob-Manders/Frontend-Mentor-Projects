
import React, { useContext } from 'react'
import { ProductContext } from '../../context/Product'

import { Section, Pledge } from '../../components'

export default function Main() {
	const { product } = useContext(ProductContext)

	return (
		<Section name="main">
			<h2>About this project</h2>

			{product.description.map((paragraph, index) => <p key={`desc_para_${index}`}>{paragraph}</p>)}

			{
				product.tiers.map(tier => <Pledge key={`tier_${tier.id}`} tier={tier} />)
			}
		</Section>
	)
}