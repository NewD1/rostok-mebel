import React from 'react'
import PropTypes from 'prop-types'

import SideBar from './SideBar'
import Content from './Content'

function MainPart({ className }) {
	return (
		<div className={className}>
			<Content className={`${className}_content`} />
			<SideBar className={`${className}_side_bar`} />
		</div>
	)
}

MainPart.propTypes = {
	className: PropTypes.string,
}

export default MainPart
