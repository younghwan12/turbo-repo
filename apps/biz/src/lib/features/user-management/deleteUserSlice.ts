import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
  step: number
}

const initialState: ModalState = {
  isOpen: false,
  step: 0,
}

const deleteModalSlice = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    openDeleteModal: state => {
      state.isOpen = true
    },
    closeDeleteModal: state => {
      state.isOpen = false
    },
    nextDeleteModal: (state, action: PayloadAction<ModalState['step']>) => {
      state.step = action.payload
    },
  },
  selectors: {
    selectDeleteModalState: (state: ModalState) => state,
  },
})
export const deleteActions = deleteModalSlice.actions
const userModalReducer = deleteModalSlice.reducer
export const deleteModalSelector = deleteModalSlice.selectors
export default userModalReducer
