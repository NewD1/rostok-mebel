import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import PageLink from './PageLink'

function PageChanger({ className, count }) {
	let pageLinks = []

	// for (let i = 0; i < count; i++) {
	// 	pageLinks.push(<PageLink className={`${className}_page_link`} number={i + 1} key={i} />)
	// }

	function floatWindow(items, index = 0, windowSize = 5) {
		if (items.length) {
			if (items.length <= windowSize + 2) return items
			if (index <= windowSize + 2) return items
			// TODO: make it work!
		}
		return
	}

	return <div className={className}>{pageLinks}</div>
}

PageChanger.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
}

PageChanger.defaultProps = {
	className: '',
	count: 0,
}

export default PageChanger
