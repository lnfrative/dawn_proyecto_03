import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface State {
    weatherQuery: string
    weatherXmlData: string
}

export const initialState: State = {
    weatherQuery: '',
    weatherXmlData: ''
}

const mainSlice = createSlice({
    name: 'main',
    reducers: {
        setWeatherQuery: (state, action: PayloadAction<string>) => ({
            ...state,
            weatherQuery: action.payload,
        }),

        setWeatherXmlData: (state, action: PayloadAction<string>) => ({
            ...state,
            weatherXmlData: action.payload,
        }),
    },
    initialState,
})

export const {
    setWeatherQuery,
    setWeatherXmlData
} = mainSlice.actions

export default mainSlice.reducer