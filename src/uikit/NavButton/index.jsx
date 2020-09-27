import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import IconSvg from 'src/uikit/IconSvg'

function NavButton({ className, title, path, svg }) {
	const navSvg = svg ? <IconSvg svg={svg} /> : null

	return (
		<li className={className}>
			<Link to={path}>
				{navSvg}
				<span className={`${className}_title`}>{title}</span>
			</Link>
		</li>
	)
}

NavButton.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	path: PropTypes.string,
	svg: PropTypes.object,
}

NavButton.defaultProps = {
	className: '',
	title: '???',
	path: '/',
	svg: null,
}

export default NavButton
