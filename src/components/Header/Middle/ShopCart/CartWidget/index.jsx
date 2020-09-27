import React from 'react'
import PropTypes from 'prop-types'

function CartWidget({ className, number }) {
	return (
		<div className={className}>
			<span>{number}</span>
		</div>
	)
}

CartWidget.propTypes = {
	className: PropTypes.string,
	number: PropTypes.number,
}

CartWidget.defaultProps = {
	className: '',
	number: 0,
}

export default CartWidget
