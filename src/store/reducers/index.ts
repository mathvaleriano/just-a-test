import { combineReducers } from '@reduxjs/toolkit'
import breedsReducers from './breeds'

const rootReducer = combineReducers({
  breeds: breedsReducers
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
