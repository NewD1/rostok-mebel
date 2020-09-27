import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './style.css'
import IconSvg from 'src/uikit/IconSvg'
import { home } from 'src/data/navigationTypes'
import SearchComponent from './SearchComponent'
import { workTime, restTime, phoneNumber, faxNumber } from 'src/data/staticHeaderData'
import ShopCart from './ShopCart'
import TextStack from 'src/uikit/TextStack'

function Middle() {
	const schedule = [workTime, restTime]
	const numbers = [phoneNumber, faxNumber]

	return (
		<div className='header_middle'>
			<Link className='middle_logo' to={home.path}>
				<IconSvg svg={home.svg} />
			</Link>
			<SearchComponent />
			<TextStack className='header_shedule' lines={schedule} />
			<TextStack className='header_numbers' lines={numbers} />
			<ShopCart className='shop_cart' />
		</div>
	)
}

export default Middle
