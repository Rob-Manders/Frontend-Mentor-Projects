
import React, { useContext } from 'react'
import { ModalContext } from '../../context/Modals'
import {
	Modal
} from '../../components'

export default function PledgeModal() {
	const { hideModal } = useContext(ModalContext)
	
	return (
		<Modal modal='pledge'>
			<h3>Make Pledge</h3>
			<p>The modal for making a pledge. Obviously...</p>
		</Modal>
	)
}