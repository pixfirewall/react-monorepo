import { PayloadAction } from '@slicesoft-core/types'
import { createSlice } from '@slicesoft-core/redux'
import { HOME_REDUCER_PATH } from '../constants'

export interface HomeGlobalState {
  homeState: boolean
}

const initialState: HomeGlobalState = {
  homeState: true,
}

export const homeSlice = createSlice({
  name: HOME_REDUCER_PATH,
  initialState,
  reducers: {
    setBooksInfo: (state, action: PayloadAction<boolean>) => {
      state.homeState = action.payload
    },
  },
})

export default homeSlice.reducer
