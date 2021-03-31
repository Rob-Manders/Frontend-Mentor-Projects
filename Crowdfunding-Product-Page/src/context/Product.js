
import React, { useState, createContext } from 'react'

const ProductContext = createContext()

function Product({ children }) {
	const [ product, setProduct ] = useState({})

	return (
		<ProductContext.Provider value={{product, setProduct}}>
			{children}
		</ProductContext.Provider>
	)
}

export { ProductContext, Product }