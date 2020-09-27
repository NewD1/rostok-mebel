import React from 'react'
import PropTypes from 'prop-types'

import TextLine from 'src/uikit/TextLine'
import { mapSvg } from 'src/data/svgBodies'
import CurrentCity from './CurrentCity'

function CityChoice({ className }) {
	return (
		<div className={className}>
			<TextLine className='your_city' text='Ваш город: ' svg={mapSvg} />
			<CurrentCity />
		</div>
	)
}

export default CityChoice
