/* eslint-disable @typescript-eslint/indent */
// eslint-disable-next-line import/named
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import homePageReducer from './containers/HomePage/homePageSlice'
import ReduxLogger from 'redux-logger'

const middleware = () => getDefaultMiddleware().concat(ReduxLogger)

export const store = configureStore({
  middleware,
  reducer: {
    homePage: homePageReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
