import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import './style.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

// install Swiper components
SwiperCore.use([Navigation, Pagination])

function HomeSwiper({ images }) {
	const slides = images.map((image, index) => (
		<SwiperSlide key={index}>
			<img src={image} />
		</SwiperSlide>
	))
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			// navigation
			pagination={{ clickable: true }}
			// onSwiper={swiper => console.log(swiper)}
			// onSlideChange={() => console.log('slide change')}
		>
			{slides}
		</Swiper>
	)
}

export default HomeSwiper
