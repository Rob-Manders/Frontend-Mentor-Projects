
import React from 'react'

export default function Button({ disabled = false, children, ...props }) {
	return (
		<button className={`${disabled && 'disabled'}`}>
			{children}
		</button>
	)
}