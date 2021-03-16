
import React from 'react'

import useTiers from '../../hooks/useTiers'
import { Button } from '../index'

export default function Pledge({ tier, ...props }) {
	const { tiers, updateStock } = useTiers()
	const { title, description, price, stock } = tiers[tier]

	function makePledge() {
		console.log("Making pledge...")
	}

	return (
		<div className="pledge">
			<div className="pledge__header">
				<h3>{title}</h3>
				<p>Pledge ${price} or more</p>
			</div>

			<p>{description}</p>

			<div className="pledge__cta">
				<p>{stock} <span>left</span></p>

				<Button>
					{
						stock > 0 ? 'Select Reward' : 'Out of stock'
					}
				</Button>
			</div>
		</div>
	)
}