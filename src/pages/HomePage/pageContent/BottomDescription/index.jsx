import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import BottomText from './BottomText'
import Video from 'src/uikit/Video'

function BottomDescription({ className }) {
	return (
		<div className={className}>
			<Video
				className='hame_bottom_video'
				width={709}
				height={399}
				src={'https://www.youtube.com/embed/Mi0wpCvavoM'}
			/>
			<BottomText className={`${className}_text`} />
		</div>
	)
}

BottomDescription.propTypes = {
	className: PropTypes.string,
}

export default BottomDescription
