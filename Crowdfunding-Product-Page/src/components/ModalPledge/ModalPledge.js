
import React, { useState, useEffect, useContext } from 'react'
import useMakePledge from '../../hooks/useMakePledge'
import { ModalContext } from '../../context/Modals'
import { Button } from '../index'

export default function ModalPledge({ noReward = false, selected = false, tier = undefined, ...props }) {
	const [ isSelected, setIsSelected ] = useState(false)
	const { switchModal } = useContext(ModalContext)
	const makePledge = useMakePledge()

	useEffect(() => {
		if (selected) setIsSelected(true)
	}, [])

	const {
		title,
		description,
		price,
		stock
	} = tier !== undefined ? tier : {}

	function pledge(tier) {
		makePledge(tier)
		switchModal('pledge', 'complete')
	}

	const noRewardContent = (
		<>
			<h3>Pledge with no reward</h3>
			<p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
		</>
	)

	const rewardContent = (
		<>
			<div className="pledge-modal__header">
				<h3>{title}</h3>
				<p>Pledge ${price} or more</p>
				<p><span className="pledge-modal__cta--stock">{stock}</span> <span>left</span></p>
			</div>

			<p>{description}</p>

			<div className="pledge-modal__cta">
				<p>Enter your pledge</p>

				{ stock > 0 ? <Button action={() => pledge(tier)}>Continue</Button> : <Button disabled>Out of stock</Button> }
			</div>
		</>
	)
	
	return (
		<div className={`pledge-modal ${isSelected && 'selected'} ${stock && !noReward === 0 && 'disabled'}`}>
			{ noReward ? noRewardContent : rewardContent }
		</div>
	)
}