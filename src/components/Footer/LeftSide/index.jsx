import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import {} from 'src/data/navigationTypes'
import NavigationList from "src/uikit/NavigationList"
import {
	footerNavFirst,
	footerNavSecond,
	footerNavThird,
	footerNavFourth,
} from 'src/data/navigationTypes'
import { footerNavBtnClass } from 'src/data/navBtnStyles'

function LeftSide() {
	return (
		<div className='footer_left_side'>
			<NavigationList
				className='footer_navigation'
				children={footerNavFirst}
				childClassName={footerNavBtnClass}
			/>
			<NavigationList
				className='footer_navigation'
				children={footerNavSecond}
				childClassName={footerNavBtnClass}
			/>
			<NavigationList
				className='footer_navigation'
				children={footerNavThird}
				childClassName={footerNavBtnClass}
			/>
			<NavigationList
				className='footer_navigation'
				children={footerNavFourth}
				childClassName={footerNavBtnClass}
			/>
		</div>
	)
}

export default LeftSide
