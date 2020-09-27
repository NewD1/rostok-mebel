import React from 'react'
import PropTypes from 'prop-types'
import CheckBox from '../CheckBox'

function PriceLimit({ className }) {
	return (
		<div className={className}>
			<p>Цена</p>
			<div className={`${className}_price`}>
				<input type='text' placeholder='5000' />
				<input type='text' placeholder='10000' />
			</div>
			<CheckBox title='Товары в наличии'/>
		</div>
	)
}

PriceLimit.propTypes = {
	className: PropTypes.string,
	// startPrice: PropTypes.oneOf(PropTypes.number, PropTypes.string),
	// endPrice: PropTypes.oneOf(PropTypes.number, PropTypes.string),
}

export default PriceLimit
