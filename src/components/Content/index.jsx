import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './style.css'
import RouterTemplate from 'src/templates/RouterTemplate'
import { allNavTypes } from 'src/data/navigationTypes'

function Content() {
	return (
		<div className='Content'>
			<RouterTemplate navTypes={allNavTypes} />
		</div>
	)
}

export default Content
