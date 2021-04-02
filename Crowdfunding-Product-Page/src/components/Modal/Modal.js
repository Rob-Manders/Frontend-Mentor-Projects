
import React, { useContext } from 'react'
import { ModalContext } from '../../context/Modals'

export default function Modal({ modal, children, ...props }) {
	const { modals } = useContext(ModalContext)

	return (
		<div className={`modal ${!modals[modal] && 'hidden'}`}>
			<div className='modal__content'>
				{children}
			</div>
		</div>
	)
}
