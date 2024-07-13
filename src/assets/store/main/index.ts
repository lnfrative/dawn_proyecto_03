import { createSlice } from '@reduxjs/toolkit'

export interface State {
}

export const initialState: State = {
}

const mainSlice = createSlice({
    name: 'main',
    reducers: {

    },
    initialState,
})

export const {
} = mainSlice.actions

export default mainSlice.reducer