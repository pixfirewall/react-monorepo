import React from 'react'
import { type RouteObject } from '@slicesoft-core/types'
import { App } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
]
