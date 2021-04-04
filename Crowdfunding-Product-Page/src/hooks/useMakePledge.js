
import { useContext } from 'react'
import { ProductContext } from '../context/Product'

export default function useMakePledge() {
	const { product, setProduct } = useContext(ProductContext)
	const { current, backers } = product

	return function makePledge(tier) {
		const { id, price } = tier

		setProduct(prevProduct => {
			const newTiers = prevProduct.tiers.map(tier => {
				if (tier.id === id) {
					return {
						...tier,
						stock: tier.stock - 1
					}
				} else {
					return tier
				}
			})

			return {
				...prevProduct,
				current: current + price,
				backers: backers + 1,
				tiers: newTiers
			}
		})
	}
}