import React from 'react'
import PropTypes from 'prop-types'
import SortSign from './SortSign'

function SortParams({ className }) {
	return (
		<ul className={`${className}_signs`}>
			<SortSign className={`${className}_sign-active ${className}_sign`} signTitle='по цене' />
			<SortSign className={`${className}_sign`} signTitle='по размеру скидки' />
			<SortSign className={`${className}_sign`} signTitle='по новизне' />
		</ul>
	)
}

SortParams.propTypes = {
	className: PropTypes.string,
}

SortParams.defaultProps = {
	className: '',
}

export default SortParams
