
import React from 'react'

import useTiers from '../../hooks/useTiers'
import { Section, Pledge } from '../../components'

export default function Main() {
	const { tiers } = useTiers()

	return (
		<Section name="main">
			<h2>About this project</h2>
			<p>
				The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
				to a more comfortable viewing height. Placing your monitor as aye level has the potential to 
				improve your posture and make your more comfortable while at work, helping you stay focuses at 
				the tast at hand.
			</p>
			<p>
				Featuring artisan scraftsmanship, the simplicity of design creates extra desk space below your 
				computer to allow notepads, pens, and USB sticks to be stored under the stand.
			</p>

			{
				tiers.map(tier => <Pledge key={`tier_${tier.id}`} tier={tier.id} />)
			}
		</Section>
	)
}