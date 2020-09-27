import React from 'react'
import PropTypes from 'prop-types'

import defaultPhoto from 'resources/images/jpg/default.jpg'

function Material({ className, photo }) {
	return (
		<div className={className}>
			<img src={photo} />
		</div>
	)
}

Material.propTypes = {
	className: PropTypes.string,
	photo: PropTypes.string,
}

Material.defaultProps = {
	className: '',
	photo: defaultPhoto
}

export default Material
