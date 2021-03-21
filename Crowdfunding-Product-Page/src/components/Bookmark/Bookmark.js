
import React from 'react'

export default function Bookmark({ active = false, ...props }) {
	return (
		<div className={`bookmark ${active && 'active'}`}>
			<svg className="bookmark__icon" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
				<g fill="none" fill-rule="evenodd">
					<circle className="bookmark__icon--circle" cx="28" cy="28" r="28"/>
					<path className="bookmark__icon--tag" d="M23 19v18l5-5.058L33 37V19z"/>
				</g>
			</svg>

			<div className="bookmark__label">
				{
					active ? 'Bookmarked' : 'Bookmark'
				}
			</div>
		</div>
	)
}