
import React from 'react'

import { Section, ProgressBar } from '../../components'

export default function Progress() {
	return (
		<Section name="progress">
			<ProgressBar target={10000} current={8000} />
		</Section>
	)
}