import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CatalogSection({ className, path, title, img }) {
	return (
		<div className={className}>
			<Link to={path}>
				<img className={`${className}_image`} src={img} />
				<div className={`${className}_title`}>
					<span>{title}</span>
				</div>
			</Link>
		</div>
	)
}

export default CatalogSection
