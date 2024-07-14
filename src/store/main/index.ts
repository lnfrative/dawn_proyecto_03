import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface State {
    weatherQuery: string
    weatherData: any
}

export const initialState: State = {
    weatherQuery: '',
    weatherData: {}
}

const mainSlice = createSlice({
    name: 'main',
    reducers: {
        setWeatherQuery: (state, action: PayloadAction<string>) => ({
            ...state,
            weatherQuery: action.payload,
        }),

        setWeatherData: (state, action: PayloadAction<any>) => ({
            ...state,
            weatherData: action.payload,
        }),
    },
    initialState,
})

export const {
    setWeatherQuery,
    setWeatherData
} = mainSlice.actions

export default mainSlice.reducer