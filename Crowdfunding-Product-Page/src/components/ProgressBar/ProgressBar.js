
import React, { useState, useEffect } from 'react'

export default function ProgressBar({ target, current, ...props }) {
	const [percentage, setPercentage] = useState('')

	useEffect(() => {
		setPercentage(`${(current / target) * 100}%`)
	}, [])

	return (
		<div id="elementID" className="progress-bar">
			<div
				style={{
					width: percentage, 
					minWidth: '1rem'
				}}
				className="progress-bar__progress"
			></div>
		</div>
	)
}