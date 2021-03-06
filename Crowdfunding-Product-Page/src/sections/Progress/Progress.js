
// Number formatting regex courtesy of Tom's Blog: https://blog.abelotech.com/posts/number-currency-formatting-javascript/

import React, { useContext } from 'react'
import { ProductContext } from '../../context/Product'
import { Section, ProgressBar, Stats } from '../../components'

const current = 89914
const target = 100000

export default function Progress() {
	const { product } = useContext(ProductContext)
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
					description={<>of ${target.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} backed</>}
				/>
				<Stats.Stat value={backers} description={<>total backers</>} />
				<Stats.Stat value={duration} description={<>days left</>} />
			</Stats>
			<ProgressBar target={target} current={current} />
		</Section>
	)
}