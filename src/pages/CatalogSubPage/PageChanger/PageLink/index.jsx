import React from 'react'
import PropTypes from 'prop-types'

function PageLink({ className, number }) {
	return <a className={className}>{number}</a>
}

PageLink.propTypes = {
	className: PropTypes.string,
	number: PropTypes.number,
}

PageLink.defaultProps = {
	className: '',
	number: 1,
}

export default PageLink
