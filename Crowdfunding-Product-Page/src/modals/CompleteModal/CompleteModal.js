
import React, { useContext } from 'react'
import { ModalContext } from '../../context/Modals'
import {
	Modal
} from '../../components'

export default function PledgeModal() {
	const { hideModal } = useContext(ModalContext)
	
	return (
		<Modal modal='complete'>
			<h3>Complete</h3>
			<p>The modal for when you have completed a pledge.</p>
		</Modal>
	)
}