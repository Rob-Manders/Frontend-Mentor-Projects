
import React, { useState, createContext } from 'react'

const ModalContext = createContext()

function Modals({ children, ...props }) {
	const [ modals, setModals ] = useState({
		pledge: false,
		completed: false
	})

	function showModal(modal) {
		setModals(prevModals => {
			return {
				...prevModals,
				[modal]: true
			}
		})
	}

	function hideModal(modal) {
		setModals(prevModals => {
			return {
				...prevModals,
				[modal]: false
			}
		})
	}

	return (
		<ModalContext.Provider value={{ modals, showModal, hideModal }}>
			{children}	
		</ModalContext.Provider>
	)
}

export { ModalContext, Modals }