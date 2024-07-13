import { configureStore } from '@reduxjs/toolkit'

import mainReducer from './main'

export const store = configureStore({
    reducer: {
      main: mainReducer
    },
    devTools: false,
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch