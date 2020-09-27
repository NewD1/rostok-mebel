import React from "react"
import PropTypes from "prop-types"

import "./style.css"
import IconSvg from "src/uikit/IconSvg"
import TextStack from "src/uikit/TextStack"
import { rostokSvg } from "src/data/svgBodies"
import { phoneNumber, faxNumber, fabricTitle, address } from "src/data/staticFooterData"

function RightSide({ className }) {
	const footerContacts = [phoneNumber, faxNumber]
	const footerCase = [fabricTitle, address]
  return (
		<div className={className}>
			<IconSvg className='rostok_svg' svg={rostokSvg} />
			<div className='footer_common_info '>
				<TextStack className='footer_text' lines={footerContacts} />
				<TextStack className='footer_text' lines={footerCase} />
			</div>
		</div>
	)
}

export default RightSide
