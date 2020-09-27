import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

function RouterTemplate({ navTypes }) {
	const routes = navTypes.map(route => (
		<Route exact path={route.path} component={route.component} key={route.name} />
	))

	return <Switch>{routes}</Switch>
}

RouterTemplate.propTypes = {
	navTypes: PropTypes.arrayOf(PropTypes.object),
}

RouterTemplate.defaultProps = {
	navTypes: [
		{
			name: 'empty_route',
			path: '/',
			component: <h1>Передай пропсы в роутер ;)</h1>,
		},
	],
}

export default RouterTemplate
