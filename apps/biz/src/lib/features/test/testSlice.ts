import { createSlice } from '@reduxjs/toolkit'
export type testState = {
  mode: 'view' | 'edit'
  depth: number
}
const initialtestState: testState = {
  mode: 'view',
  depth: 1,
}
const testSlice = createSlice({
  name: 'test',
  initialState: initialtestState,
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload
    },
    changeDepth(state, action) {
      state.depth = action.payload
    },
  },
  selectors: {
    state: (state: testState) => state,
  },
})
export const testActions = testSlice.actions
const testReducer = testSlice.reducer
export const testSelectors = testSlice.selectors
export default testReducer
