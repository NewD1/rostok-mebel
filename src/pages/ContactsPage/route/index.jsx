import React from 'react'
import { Route } from 'react-router-dom'
import { contacts } from 'src/data/navigationTypes'

export const ContactsRoute = () => (
	<Route exact path={contacts.path} component={contacts.component} />
)
