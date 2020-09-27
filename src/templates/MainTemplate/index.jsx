import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './style.css'
import Content from 'src/components/Content'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

function MainTemplate() {
	return (
		<div className='main_template'>
			<Router>
				<Header />

				<Content />

				<Footer />
			</Router>
		</div>
	)
}

export default MainTemplate
