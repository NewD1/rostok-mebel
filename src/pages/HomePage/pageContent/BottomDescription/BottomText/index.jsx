import React from 'react'
import PropTypes from 'prop-types'
import { bottomDescription } from 'src/data/homeBottomDescription'

function BottomText({ className }) {
	const textDescription = bottomDescription.text.map((text, index) => (
		<p className={`${className}_paragraf`} key={index}>
			{text}
		</p>
	))

	return (
		<div className={className}>
			<p className={`${className}_title`}>{bottomDescription.title}</p>
			{textDescription}
		</div>
	)
}

BottomText.propTypes = {
	className: PropTypes.string,
}

export default BottomText
