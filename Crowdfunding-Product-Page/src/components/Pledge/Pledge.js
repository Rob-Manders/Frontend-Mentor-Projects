
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
		<div className={`pledge ${stock === 0 && 'disabled'}`}>
			<div className="pledge__header">
				<h3>{title}</h3>
				<p>Pledge ${price} or more</p>
			</div>

			<p>{description}</p>

			<div className="pledge__cta">
				<p><span className="pledge__cta--stock">{stock}</span> <span>left</span></p>

				{
					stock > 0 ? <Button>Select Reward</Button> : <Button disabled>Out of stock</Button>
				}
			</div>
		</div>
	)
}