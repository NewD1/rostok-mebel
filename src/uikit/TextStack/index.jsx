import React from 'react'
import PropTypes from 'prop-types'
import TextLine from '../TextLine'

function TextStack({ className, lines }) {
	const textLines = lines
		? lines.map(line => (
				<TextLine className={line.className} text={line.text} svg={line.svg} key={line.text} />
		  ))
		: 'Если не добавишь данных, я так и останусь бессмысленным текстом!((('
	return <div className={className}>{textLines}</div>
}

TextStack.propTypes = {
	lines: PropTypes.arrayOf(PropTypes.object),
}

TextStack.defaultProps = {
	className: '',
	lines: [],
}

export default TextStack
