import React from 'react'
import { Route } from 'react-router-dom'
import { samples } from 'src/data/navigationTypes'

export const SamplesRoute = () => <Route exact path={samples.path} component={samples.component} />
