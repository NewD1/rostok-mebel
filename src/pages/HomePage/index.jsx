import React from 'react'
import Novelties from './pageContent/Novelties'
import CatalogSectors from './pageContent/CatalogSectors'
import BottomDescription from './pageContent/BottomDescription'
import HomeSwiper from './pageContent/HomeSwiper'
import slide1 from 'resources/images/jpg/slide1.jpg'
import slide2 from 'resources/images/jpg/slide2.jpg'
import slide3 from 'resources/images/jpg/slide3.jpg'

function HomePage() {
	return (
		<div className='page'>
			<HomeSwiper images={[slide1, slide2, slide3]} />
			<Novelties className='home_novelties' />
			<CatalogSectors className='home_catalog_sectors' />
			<BottomDescription className='home_bottom_description' />
		</div>
	)
}

export default HomePage
