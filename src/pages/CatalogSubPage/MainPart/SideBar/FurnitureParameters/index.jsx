import React from 'react'
import PropTypes from 'prop-types'

import CheckBox from '../CheckBox'

function FurnitureParameters({ className, title, parameters }) {
	const checkBoxes = parameters.map((title, index) => <CheckBox id={index} title={title} key={index} />)

	return (
		<div className={className}>
			<p>{title}</p>
			<div className={`${className}_check_boxes`}>{checkBoxes}</div>
		</div>
	)
}

FurnitureParameters.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	parameters: PropTypes.array,
}

FurnitureParameters.defaultProps = {
	className: '',
	title: 'ЛДСП',
	parameters: [],
}

export default FurnitureParameters
