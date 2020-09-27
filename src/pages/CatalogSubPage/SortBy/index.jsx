import React from 'react'
import PropTypes from 'prop-types'

import SortParams from './SortParams'

function SortBy({ className }) {
	return (
		<div className={className}>
			<span className={`${className}_title`}>Сортировать</span>
			<SortParams className={className} />
		</div>
	)
}

SortBy.propTypes = {
	className: PropTypes.string,
}

SortBy.defaultProps = {
	className: '',
}

export default SortBy
