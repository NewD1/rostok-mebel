import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './style.css'
import SortBy from './SortBy'
import MainPart from './MainPart'
import PageChanger from './PageChanger'

function CatalogSubPage() {
	return (
		<div className='catalog_subpage'>
			<SortBy className='catalog_subpage_sort' />
			<MainPart className='catalog_subpage_main_part' />
			<PageChanger className='catalog_subpage_page_changer' count={10} />// ! ATTENTION !
		</div>
	)
}

CatalogSubPage.propTypes = {
	className: PropTypes.string,
}

export default CatalogSubPage
