import PropTypes from 'prop-types'

export const svgPropTypesShape = PropTypes.shape({
	width: PropTypes.string,
	height: PropTypes.string,
	fill: PropTypes.string,
	color: PropTypes.string,
	body: PropTypes.func,
})
