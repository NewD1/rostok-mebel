import React from 'react'
import PropTypes from 'prop-types'
import { svgPropTypesShape } from 'src/templates/svgPropTypesShape'

function IconSvg({ className, svg }) {
	return (
		<svg
			className={className}
			width={svg.width}
			height={svg.height}
			viewBox={`0 0 ${svg.width} ${svg.height}`}
			fill={svg.fill}
			xmlns='http://www.w3.org/2000/svg'>
			{svg.body({ color: svg.color })}
		</svg>
	)
}

IconSvg.propTypes = {
	className: PropTypes.string,
	svg: svgPropTypesShape,
}

IconSvg.defaultProps = {
	className: '',
	svg: {
		width: '50',
		height: '50',
		fill: 'none',
		color: '#333333',
		body: () => {},
	},
}

export default IconSvg
