import React from 'react'
import PropTypes from 'prop-types'

function SearchComponent() {
	return (
		<div className='middle_search_container'>
			<input className='middle_search_line' />
			<button className='middle_search_button'>Поиск</button>
		</div>
	)
}

SearchComponent.propTypes = {}

export default SearchComponent
