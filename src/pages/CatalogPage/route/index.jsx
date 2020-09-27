import React from 'react'
import { Route } from 'react-router-dom'
import { catalog } from 'src/data/navigationTypes'

export const CatalogRoute = () => <Route exact path={catalog.path} component={catalog.component} />
