import React from 'react'
import PropTypes from 'prop-types'
import Video from 'src/uikit/Video'
import { Link } from 'react-router-dom'

function NoveltyItem({ className, title, path, src }) {
	return (
		<div className={className}>
			<Video className={`${className}_video`} width='290' height='230' src={src} />
			<Link to={path} className={`${className}_text`}>
				{title}
			</Link>
		</div>
	)
}

NoveltyItem.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
}

NoveltyItem.defaultProps = {
	className: '',
	src: 'https://www.youtube.com/embed/xxmoEHymuwo',
}

export default NoveltyItem
