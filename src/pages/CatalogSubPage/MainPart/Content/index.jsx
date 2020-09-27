import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ProductCard from 'src/uikit/ProductCard'
import { pathToFetchUrl } from 'src/data/navigationTypes'
import sendRequest from 'src/helpers/sendRequest'

function Content({ className }) {
	const [content, setContent] = useState('Loading...')
	const itemsUrl = pathToFetchUrl[`${location.pathname}`]

	useEffect(() => {
		if (itemsUrl) {
			sendRequest({ method: 'GET', url: itemsUrl })
				.then(result =>
					result.ITEMS.map(item => (
						<ProductCard
							className={`${className}_product`}
							title={item.NAME}
							// path={item.url}
							// img={item.photo}
							key={item.ID}
						/>
					))
				)
				.then(items => setContent(items))
		} else setContent('Раздел в разработке...')
	}, [])

	return <div className={className}>{content}</div>
}

Content.propTypes = {
	className: PropTypes.string,
}

export default Content
