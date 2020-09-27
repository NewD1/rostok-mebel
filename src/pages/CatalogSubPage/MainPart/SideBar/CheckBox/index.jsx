import React from 'react'
import PropTypes from 'prop-types'

function CheckBox({ id, title }) {
	return (
		<div className='sidebar_checkbox'>
			<input id={`${id}_${title}`} type='checkbox' />
			<label id={`${title}_${id}`} htmlFor={`${id}_${title}`}>
				{title}
			</label>
		</div>
	)
}

export default CheckBox
