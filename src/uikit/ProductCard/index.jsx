import React from 'react'
import PropTypes from 'prop-types'

import defaultImage from 'resources/images/jpg/default.jpg'
import { Link } from 'react-router-dom'

function ProductCard({ className, path, img, title, actualPrice, oldPrice }) {
	return (
		<div className={className}>
			<Link to={path}>
				<div className={`${className}_image`}>
					<img src={img} />
				</div>

				<div className={`${className}_description`}>
					<p className={`${className}_title`}>{title}</p>
					<p className={`${className}_oldPrice`} style={{ display: oldPrice ? 'inline' : 'none' }}>
						{oldPrice}
					</p>
					<p className={`${className}_actualPrice`}>{actualPrice}</p>
				</div>
			</Link>
		</div>
	)
}

ProductCard.propTypes = {
	className: PropTypes.string,
	path: PropTypes.string,
	img: PropTypes.string,
	title: PropTypes.string,
	actualPrice: PropTypes.string,
	oldPrice: PropTypes.string,
}

ProductCard.defaultProps = {
	className: '',
	path: '/',
	img: defaultImage,
	title: '???',
	actualPrice: 'Цену уточняйте!',
	oldPrice: null,
}

export default ProductCard
