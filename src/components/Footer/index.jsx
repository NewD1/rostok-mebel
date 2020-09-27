import React from "react"
import PropTypes from "prop-types"

import "./style.css"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

function Footer() {
  return (
    <footer>
      <div className='footer_content'>
        <LeftSide className='footer_left_side' />
        <RightSide className='footer_right_side' />
      </div>
    </footer>
  )
}

export default Footer
