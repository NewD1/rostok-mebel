import React from 'react'
import { Route } from 'react-router-dom'
import { news } from 'src/data/navigationTypes'

export const NewsRoute = () => <Route exact path={news.path} component={news.component} />
