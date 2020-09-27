import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { cart } from 'src/data/navigationTypes'
import IconSvg from 'src/uikit/IconSvg'
import CartWidget from './CartWidget'

function ShopCart({ className }) {
	const [numberOfPurchases, setnumberOfPurchases] = useState(0) //Это все херня, добавляй редакс!!!

	return (
		<div className={className}>
			<Link to={cart.path}>
				<IconSvg svg={cart.svg} />
				<div className='cart_description'>
					<span>{cart.title}</span>
					<CartWidget className='cart_widget' number={numberOfPurchases} />
				</div>
			</Link>
		</div>
	)
}

export default ShopCart
