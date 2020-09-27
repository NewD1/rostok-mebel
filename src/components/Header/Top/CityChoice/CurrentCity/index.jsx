import React from 'react'
import PropTypes from 'prop-types'

import IconSvg from 'src/uikit/IconSvg'
import { tickSvg } from 'src/data/svgBodies'

function CurrentCity() {
	const currentCity = 'Пенза' //Используй редаааакс!!!!

	return (
		<a className='city_name'>
			<span>{currentCity}</span>
			<IconSvg svg={tickSvg} />
		</a>
	)
}

export default CurrentCity
