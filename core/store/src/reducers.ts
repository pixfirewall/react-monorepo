import { combineReducers } from '@reduxjs/toolkit'
import { reducers as homeReducers, apiReducers as homeApiReducers } from '@slicesoft-features/home'

import rootReducer from './rootSlice'

export const appReducers = combineReducers({
  root: rootReducer,
  ...homeReducers,
  ...homeApiReducers,
})
