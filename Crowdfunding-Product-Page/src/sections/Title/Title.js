
import React, { useState, useContext } from 'react'
import { ProductContext } from '../../context/Product'
import { ModalContext } from '../../context/Modals'
import { Section, Button, Bookmark } from '../../components'
import MastercraftLogoIcon from '../../icons/MastercraftLogoIcon'
import useToggleBookmark from '../../hooks/useToggleBookmark'

export default function Title() {
	const { product } = useContext(ProductContext)
	const { showModal } = useContext(ModalContext)
	const { name, subTitle, bookmarked } = product
	const toggleBookmark = useToggleBookmark()

	return (
		<Section name="title">
			<MastercraftLogoIcon />
			<h2>{name}</h2>
			<p>{subTitle}</p>
			<div className="title__cta">
				<Button action={() => showModal('pledge')}>Back this project</Button>
				{
					bookmarked ? <Bookmark action={() => toggleBookmark()} active/> : <Bookmark action={() => toggleBookmark()} />
				}
			</div>
		</Section>
	)
}