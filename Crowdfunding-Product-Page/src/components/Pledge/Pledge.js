
import React, { useContext } from 'react'
import useMakePledge from '../../hooks/useMakePledge'
import { ModalContext } from '../../context/Modals'
import { Button } from '../index'

export default function Pledge({ tier, ...props }) {
	const { showModal } = useContext(ModalContext)
	const makePledge = useMakePledge()
	const {
		title,
		description,
		price,
		stock
	} = tier

	function pledge(tier) {
		makePledge(tier)
		showModal('complete')
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
					stock > 0 ? <Button action={() => pledge(tier)}>Select Reward</Button> : <Button disabled>Out of stock</Button>
				}
			</div>
		</div>
	)
}