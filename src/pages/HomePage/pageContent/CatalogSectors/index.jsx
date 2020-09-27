import React from 'react'
import PropTypes from 'prop-types'

import { homePageCatalog } from 'src/data/navigationTypes'

import './style.css'
import CatalogSection from 'src/uikit/CatalogSection'

function CatalogSectors({ className }) {
	const sections = homePageCatalog.map(section => (
		<CatalogSection
			className={`${className}_section`}
			path={section.path}
			title={section.title}
			img={section.jpg}
			key={section.name}
		/>
	))

	return (
		<div className={className}>
			{sections}
			<div className={`${className}_section_goto`}>
				<button className={`${className}_section_goto_button`}>Весь каталог</button>
			</div>
		</div>
	)
}

export default CatalogSectors
