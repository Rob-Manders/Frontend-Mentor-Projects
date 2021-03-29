
import React, { useState } from 'react'

export default function useProduct() {
	const [ product, setProduct ] = useState(
		{
			name: "Mastercraft Bamboo Monitor Riser",
			subTitle: "A beautiful & handcraft monitor stand to reduce neck and eye strain.",
			description: <>
				<p>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
					to a more comfortable viewing height. Placing your monitor as aye level has the potential to 
					improve your posture and make your more comfortable while at work, helping you stay focuses at 
					the tast at hand.
				</p>
				<p>
					Featuring artisan scraftsmanship, the simplicity of design creates extra desk space below your 
					computer to allow notepads, pens, and USB sticks to be stored under the stand.
				</p>
			</>,
			target: 100000,
			current: 89914,
			backers: 5007,
			duration: 56,
			tiers: [
				{
					id: 0,
					title: "Bamboo Stand",
					description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
					price: 25,
					stock: 101
				},
				{
					id: 1,
					title: "Black Edition Stand",
					description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
					price: 75,
					stock: 64
				},
				{
					id: 2,
					title: "Mahogany Special Edition",
					description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
					price: 200,
					stock: 0
				}
			]
		}
	)

	function updateFunds(amount) {
		setProduct(prevProduct => {
			return {
				...prevProduct,
				current: prevProduct.current + amount
			}
		})
	}

	function addBacker() {
		setProduct(prevProduct => {
			return {
				...prevProduct,
				backers: prevProduct.backers++
			}
		})
	}

	function updateStock(id, stock) {
		setProduct(prevProduct => {
			return prevProduct.tiers.map(tier => {
				if (tier !== id ) {
					return tier
				} else {
					return {
						...tier,
						stock
					}
				}
			})
		})
	}

	return { product, setProduct, updateFunds, addBacker, updateStock }
}