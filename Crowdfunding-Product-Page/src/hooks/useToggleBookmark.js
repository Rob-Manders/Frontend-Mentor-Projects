
import { useContext } from 'react'
import { ProductContext } from '../context/Product'

export default function useToggleBookmark() {
	const { product, setProduct } = useContext(ProductContext)

	return function toggleBookmark() {
		setProduct(prevProduct => {
			return {
				...prevProduct,
				bookmarked: !product.bookmarked
			}
		})
	}
}