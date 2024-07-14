import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface State {
    weatherQuery: string
}

export const initialState: State = {
    weatherQuery: ''
}

const mainSlice = createSlice({
    name: 'main',
    reducers: {
        setWeatherQuery: (state, action: PayloadAction<string>) => ({
            ...state,
            weatherQuery: action.payload,
        })
    },
    initialState,
})

export const {
    setWeatherQuery
} = mainSlice.actions

export default mainSlice.reducer