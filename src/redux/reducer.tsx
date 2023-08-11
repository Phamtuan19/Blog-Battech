import { combineReducers } from '@reduxjs/toolkit'
import languageSlice from './slices/language.slice'

const rootReducer = combineReducers({
    [languageSlice.name]: languageSlice.reducer
})

export interface RootState {
    language: 'vi' | 'en'
}

export default rootReducer
