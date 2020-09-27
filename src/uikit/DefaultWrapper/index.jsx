import React from "react"
import PropTypes, { object } from "prop-types"

import styleDefinition from "src/helpers/styleDefinition"

function DefaultList({ style, children }) {
  const childStyles = styleDefinition(childStyle)

  const navBtns = children.map(child => {
    return <NavButton title={child.title} path={child.path} key={child.name} style={childStyles} />
  })

  const styles = styleDefinition(style)

  return (
    <ul className={styles.className} style={styles.stylesDefined}>
      {navBtns}
    </ul>
  )
}

DefaultList.propTypes = {
  style: PropTypes.string || propTypes.object,
  children: PropTypes.arrayOf(PropTypes.object),
}

DefaultList.defaultProps = {
  style: { listStyle: "none" },
  children: [
    {
      name: "empty_button",
      title: "Я заглушка!",
      path: "/",
    },
  ],
}

export default DefaultList
