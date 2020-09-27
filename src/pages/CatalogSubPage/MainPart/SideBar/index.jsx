import React from 'react'
import PropTypes from 'prop-types'

import PriceLimit from './PriceLimit'
import Materials from './Materials'
import FurnitureParameters from './FurnitureParameters'
import { materials } from 'src/data/materials'

function SideBar({ className }) {
	const params = materials.map((material, index) => (
		<FurnitureParameters className={`${className}_parameters`} title={material.title} parameters={material.items} key={index} />
	))

	return (
		<div className={className}>
			<PriceLimit className={`${className}_limit`} />
			<Materials className={`${className}_materials`} materialsBase='ЛДСП' />
			<div className={`${className}_params`}>{params}</div>
		</div>
	)
}

SideBar.propTypes = {
	className: PropTypes.string,
}

export default SideBar
