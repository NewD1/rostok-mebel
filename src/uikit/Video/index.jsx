import React from 'react'
import PropTypes from 'prop-types'

function Video({ className, width, height, src }) {
	return (
		<div className={className}>
			<iframe
				width={width}
				height={height}
				src={src}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen></iframe>
		</div>
	)
}

Video.propTypes = {
	className: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	src: PropTypes.string,
}

Video.defaultProps = {
	className: '',
	width: '709',
	height: '399',
	src: 'https://www.youtube.com/embed/xxmoEHymuwo',
}

export default Video
