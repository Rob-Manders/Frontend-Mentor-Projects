
import React, { useEffect, useContext } from 'react'
import { ModalContext } from '../../context/Modals'
import CloseModalIcon from '../../icons/CloseModalIcon'

export default function Modal({ modal, children, ...props }) {
	const { hideModal } = useContext(ModalContext)

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	return (
		<div className={`modal modal__${modal}`}>
			<div className='modal__content'>
				<CloseModalIcon action={() => hideModal(modal)} />
				{children}
			</div>
		</div>
	)
}