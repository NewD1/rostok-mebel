import React from 'react'
import PropTypes from 'prop-types'
import NavButton from 'src/uikit/NavButton'

function NavigationList({ className, children, childClassName }) {
	const navBtns = children.map(child => (
		<NavButton
			className={childClassName}
			title={child.title}
			path={child.path}
			svg={child.svg}
			fetchUrl={child.fetchUrl}
			key={child.name}
		/>
	))

	return <ul className={className}>{navBtns}</ul>
}

NavigationList.propTypes = {
	className: PropTypes.string,
	children: PropTypes.arrayOf(PropTypes.object),
	childClassName: PropTypes.string,
}

NavigationList.defaultProps = {
	className: { listStyle: 'none' },
	children: [
		{
			name: 'empty_button',
			title: 'Я заглушка!',
			path: '/',
		},
	],
	childClassName: '',
}

export default NavigationList
