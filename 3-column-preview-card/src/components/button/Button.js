
import React from 'react'

export default function Button({children, href}) {
	return (
		<a className='button' href={href}>
			{children}
		</a>
	)
}