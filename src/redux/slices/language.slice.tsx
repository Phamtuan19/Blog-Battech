import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../reducer'

const initialState: 'vi' | 'en' = 'vi'

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            console.log(action.payload)
            return (state = action.payload)
        }
    }
})

const { setLanguage } = languageSlice.actions

export const useLanguage = () => {
    const dispatch = useDispatch()
    const language = useSelector((state: RootState) => state.language)

    const actionSetLanguage = (payload: string) => {
        dispatch(setLanguage(payload))
    }

    return { language, actionSetLanguage }
}

export default languageSlice
