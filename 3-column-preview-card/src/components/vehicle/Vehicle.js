
import React from 'react'
import Button from '../button/Button'

export default function Vehicle({vehicle}) {
	const {
		type,
		title,
		description,
		colour,
		icon
	} = vehicle

	return (
		<div className={`vehicle ${type}`}>
			<img src={icon}></img>
			<h2>{title}</h2>
			<p>{description}</p>
			<Button href='#'>Learn More</Button>
		</div>
	)
}