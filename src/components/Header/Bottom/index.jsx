import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import { catalogMainNavSvg, catalogSubNavTypes } from 'src/data/navigationTypes'
import NavigationList from 'src/uikit/NavigationList'

function Bottom({ className }) {
	return (
		<div className={className}>
			<NavigationList
				className={`${className}_main_nav`}
				children={catalogMainNavSvg}
				childClassName={`${className}_main_nav_btn`}
			/>
			<NavigationList
				className={`${className}_sub_nav`}
				children={catalogSubNavTypes}
				childClassName={`${className}_sub_nav_btn`}
			/>
		</div>
	)
}

export default Bottom
