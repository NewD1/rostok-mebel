import React from 'react'
import PropTypes from 'prop-types'

function SortSign({ className, signTitle, sortDirection }) {
	//add some logic to process sort direction
	return (
		<li className={className}>
			<span className={`${className}_title`}>{signTitle}</span>
			<div className={`${className}_direction`}></div>
		</li>
	)
}

SortSign.propTypes = {
	className: PropTypes.string,
	signTitle: PropTypes.string,
	sortDirection: PropTypes.bool,
}

SortSign.defaultProps = {
	className: '',
	signTitle: 'по цене',
	sortDirection: true,
}

export default SortSign
