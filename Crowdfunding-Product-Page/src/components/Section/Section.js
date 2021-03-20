
import React from 'react'

export default function Section({ name, children, ...props }) {
	return (
		<section className={name}>
			{children}
		</section>
	)
}