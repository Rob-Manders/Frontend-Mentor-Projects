
import React, { useContext } from 'react'
import { ModalContext } from '../../context/Modals'
import { Modal, Button } from '../../components'

export default function PledgeModal() {
	const { hideModal, switchModal } = useContext(ModalContext)

	return (
		<Modal modal='pledge'>
			<h3>Back this project</h3>
			<p>The modal for making a pledge. Obviously...</p>
			<Button action={() => switchModal('pledge', 'complete')}>OK</Button>
		</Modal>
	)
}