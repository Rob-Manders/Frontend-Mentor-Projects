
import React, { useContext } from 'react'
import { ProcductContext, ProductContext } from '../../context/Product'
import { Section, Button, Bookmark } from '../../components'

export default function Title() {
	const { product } = useContext(ProductContext)
	const { name, subTitle } = product

	return (
		<Section name="title">
			<h2>{name}</h2>
			<p>{subTitle}</p>
			<div className="title__cta">
				<Button>Back this project</Button>
				<Bookmark active/>
			</div>
		</Section>
	)
}