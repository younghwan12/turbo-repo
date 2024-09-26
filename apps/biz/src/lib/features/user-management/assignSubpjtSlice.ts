import { createSlice } from '@reduxjs/toolkit'

type AssignDialogState = {
  isOpen: boolean
  checkedSubpjtList: string[]
}

const initialAssignSubpjtState: AssignDialogState = {
  isOpen: false,
  checkedSubpjtList: [],
}

const assignSubpjtSlice = createSlice({
  name: 'assignSubpjtModal',
  initialState: initialAssignSubpjtState,
  reducers: {
    openAssignSubpjtDialog: state => {
      state.isOpen = true
    },
    closeAssignSubpjtDialog: state => {
      state.isOpen = false
      state.checkedSubpjtList = []
    },
  },
  selectors: {
    selectAssignSubpjt: (state: AssignDialogState) => state,
  },
})

export const assignActions = assignSubpjtSlice.actions
const assignDialogReducer = assignSubpjtSlice.reducer
export const assignSubpjtDialogSelector = assignSubpjtSlice.selectors
export default assignDialogReducer
