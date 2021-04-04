
import React, { useContext } from 'react'
import { ProductContext } from '../../context/Product'
import { ModalContext } from '../../context/Modals'
import { Modal, Button } from '../../components'
import CheckIcon from '../../icons/CheckIcon'

export default function CompleteModal() {
	const { product } = useContext(ProductContext)
	const { hideModal } = useContext(ModalContext)
	
	return (
		<Modal modal='complete'>
			<CheckIcon />

			<h2>Thanks for your support!</h2>
			<p>{product.thankyouMessage}</p>

			<Button action={() => hideModal('complete')}>
				Got it!
			</Button>
		</Modal>
	)
}