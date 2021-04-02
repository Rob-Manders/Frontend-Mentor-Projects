
import React, { useContext } from 'react'
import { ModalContext } from '../../context/Modals'
import CloseModal from '../../icons/CloseModal'

export default function Modal({ modal, children, ...props }) {
	const { modals, hideModal } = useContext(ModalContext)

	return (
		<div className={`modal ${!modals[modal] && 'hidden'}`}>
			<div className='modal__content'>
				<CloseModal action={() => {
					console.log(`Hide modal: ${modal}`)
					hideModal(modal)
				}} />
				{children}
			</div>
		</div>
	)
}
