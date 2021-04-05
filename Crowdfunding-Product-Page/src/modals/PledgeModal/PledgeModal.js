
import React, { useContext } from 'react'
import { ProductContext } from '../../context/Product'
import { Modal, ModalPledge } from '../../components'

export default function PledgeModal() {
	const { product } = useContext(ProductContext)

	return (
		<Modal modal='pledge'>
			<h3>Back this project</h3>
			<p>Want to support us in bringing {product.name} out in the world?</p>

			<ModalPledge noReward />

			{ product.tiers.map(tier => <ModalPledge key={`tier_modal_${tier.id}`} tier={tier} />) }
		</Modal>
	)
}