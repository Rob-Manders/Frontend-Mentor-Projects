
import React, { useState, useEffect, } from 'react'

export default function ProgressBar({ current, target, ...props }) {
	const [percentage, setPercentage] = useState('')

	useEffect(() => {
		if (current >= target) {
			setPercentage('100%')
		} else {
			setPercentage(`${(current / target) * 100}%`)
		}
	}, [current])

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