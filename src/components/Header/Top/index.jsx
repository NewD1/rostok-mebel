import React from "react"
import PropTypes from "prop-types"

import "./style.css"
import { mainNavTypes } from "src/data/navigationTypes"
import NavigationList from "src/uikit/NavigationList"
import { headerTopNavBtnClass } from "src/data/navBtnStyles"
import IconSvg from "src/uikit/IconSvg"
import { publicLogoSvg } from "src/data/svgBodies"
import CityChoice from "./CityChoice"

function Top() {
  return (
    <div className='header_top'>
      <NavigationList
        className='header_top_navigation'
        children={mainNavTypes}
        childClassName={headerTopNavBtnClass}
      />
      <CityChoice className='city_choice' />
      <IconSvg svg={publicLogoSvg} />
    </div>
  )
}

export default Top
