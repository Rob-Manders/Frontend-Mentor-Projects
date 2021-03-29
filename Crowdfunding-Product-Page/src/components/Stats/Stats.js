
import React, { createContext, useContext } from 'react'

export default function Stats({ children, ...props }) {
	return (
		<div className="stats">
			{children}
		</div>
	)
}

Stats.Stat = ({ value, target = null, description, ...props}) => {
	return (
		<div className="stats__stat">
			<h3 className="stats__stat--value">{value}</h3>
			<p className="stats__stat--description">{description}</p>
		</div>
	)
}