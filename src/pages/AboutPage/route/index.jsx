import React from 'react'
import { Route } from 'react-router-dom'
import { about } from 'src/data/navigationTypes'

export const AboutRoute = () => <Route exact path={about.path} component={about.component} />
