import React from 'react'
import PropTypes from 'prop-types'
import IconSvg from 'src/uikit/IconSvg'
import { svgPropTypesShape } from 'src/templates/svgPropTypesShape'

function TextLine({ className, text, svg }) {
	const svgItem = svg ? <IconSvg svg={svg} /> : null

	return (
		<div className={className}>
			{svgItem}
			<span>{text}</span>
		</div>
	)
}

TextLine.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	svg: svgPropTypesShape || null,
}

TextLine.defaultProps = {
	className: '',
	text: '',
	svg: null,
}

export default TextLine
