import { createSlice } from '@reduxjs/toolkit'
import { IHomePageState } from './types'

const initialState: IHomePageState = {
  animePage: null,
}

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setAnimePage(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.animePage = action.payload
    },
  },
})

export const { setAnimePage } = HomePageSlice.actions
export default HomePageSlice.reducer
