import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import NoveltyItem from './NoveltyItem'
import { novelties } from 'src/temporaryData/novelties'

function Novelties({ className }) {
	const noveltyItems = novelties.map((novelty, index) => (
		<NoveltyItem
			className={`${className}_item`}
			path={novelty.path}
			title={novelty.title}
			src={novelty.videoSrc}
			key={index}
		/>
	))

	return (
		<React.Fragment>
			<p className={`${className}_main_title`}>Новинки</p>
			<div className={className}>{noveltyItems}</div>
		</React.Fragment>
	)
}

export default Novelties
