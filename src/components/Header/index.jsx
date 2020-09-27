import React from 'react'
import PropTypes from 'prop-types'
import Top from './Top'
import './style.css'
import Middle from './Middle'
import Bottom from './Bottom'

function Header() {
	return (
		<header>
			<Top className='header_top' />
			<Middle className='header_middle' />
			<Bottom className='header_bottom' />
		</header>
	)
}

export default Header
