
import React, { useContext } from 'react'
import { ModalContext } from '../../context/Modals'
import CloseModalIcon from '../../icons/CloseModalIcon'

export default function Modal({ modal, children, ...props }) {
	const { modals, hideModal } = useContext(ModalContext)

	return (
		<div className={`modal modal__${modal} ${!modals[modal] && 'hidden'}`}>
			<div className='modal__content'>
				<CloseModalIcon action={() => {
					console.log(`Hide modal: ${modal}`)
					hideModal(modal)
				}} />
				{children}
			</div>
		</div>
	)
}
