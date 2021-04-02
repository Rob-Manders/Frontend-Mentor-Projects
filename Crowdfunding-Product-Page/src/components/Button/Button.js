
import React from 'react'

export default function Button({ action, disabled = false, children, ...props }) {
	return (
		<button className={`${disabled && 'disabled'}`} onClick={action}>
			{children}
		</button>
	)
}