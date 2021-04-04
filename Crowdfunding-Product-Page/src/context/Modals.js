
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

	function switchModal(currentModal, nextModal) {
		hideModal(currentModal)
		showModal(nextModal)
	}

	return (
		<ModalContext.Provider value={{ modals, showModal, hideModal, switchModal }}>
			{children}	
		</ModalContext.Provider>
	)
}

export { ModalContext, Modals }