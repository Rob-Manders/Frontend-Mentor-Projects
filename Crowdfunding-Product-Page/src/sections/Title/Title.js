
import React, { useContext } from 'react'
import { ProductContext } from '../../context/Product'
import { ModalContext } from '../../context/Modals'
import { Section, Button, Bookmark } from '../../components'

export default function Title() {
	const { product } = useContext(ProductContext)
	const { showModal } = useContext(ModalContext)
	const { name, subTitle } = product

	

	return (
		<Section name="title">
			<h2>{name}</h2>
			<p>{subTitle}</p>
			<div className="title__cta">
				<Button action={() => showModal('pledge')}>Back this project</Button>
				<Bookmark active/>
			</div>
		</Section>
	)
}