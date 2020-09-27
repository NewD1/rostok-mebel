import React from 'react'
import PropTypes from 'prop-types'
import Material from './Material'

function Materials({ className, materialsBase }) {
	const materials = new Array(12).fill(<Material className={`${className}_material`} />)

	return (
		<div className={className}>
			<p className={`${className}_title`}>Материал {materialsBase}</p>
			<div className={`${className}_samples`}>{materials}</div>
		</div>
	)
}

Materials.propTypes = {
	className: PropTypes.string,
	materialsBase: PropTypes.string,
}

Materials.defaultProps = {
	className: '',
	materialsBase: 'ЛДСП',
}

export default Materials
