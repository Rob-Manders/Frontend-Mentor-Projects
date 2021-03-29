
import React from 'react'

import { Section, ProgressBar, Stats } from '../../components'
const current = 89914
const target = 100000

export default function Progress() {
	return (
		<Section name="progress">
			<Stats>
				<Stats.Stat
					value={`$${89914}`}
					description={<>of ${target} backed</>}
				/>
				<Stats.Stat value={5007} description={<>total backers</>} />
				<Stats.Stat value={56} description={<>days left</>} />
			</Stats>
			<ProgressBar target={target} current={current} />
		</Section>
	)
}