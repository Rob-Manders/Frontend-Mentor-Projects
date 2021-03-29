
import React from 'react'
import useProduct from '../../hooks/useProduct'
import { Section, ProgressBar, Stats } from '../../components'

const current = 89914
const target = 100000

export default function Progress() {
	const { product } = useProduct()
	const {
		target,
		current,
		backers,
		duration
	} = product

	return (
		<Section name="progress">
			<Stats>
				<Stats.Stat
					value={`$${current}`}
					description={<>of ${target} backed</>}
				/>
				<Stats.Stat value={backers} description={<>total backers</>} />
				<Stats.Stat value={duration} description={<>days left</>} />
			</Stats>
			<ProgressBar target={target} current={current} />
		</Section>
	)
}