import { type BizAddUserInfo } from '@pims-frontend/biz/app/(auth)/basic-info/user-management/dialog/add-user-dialog/partner-contents/biz-add-uesr-dialog'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserType = 'partner' | 'sk'

type ModalState = {
  isOpen: boolean
  step: number
  userType: string
  target: BizAddUserInfo[] | null
  duplicate: {
    isIdDuplicate: boolean
    isNicknameDuplicate: boolean
    isButtonEnabled: boolean
  }
}

const initialState: ModalState = {
  isOpen: false,
  step: 0,
  userType: 'partner',
  target: null,
  duplicate: {
    isIdDuplicate: false,
    isNicknameDuplicate: false,
    isButtonEnabled: false,
  },
}

const addUserSlice = createSlice({
  name: 'addModal',
  initialState,
  reducers: {
    openAddUserModal: state => {
      state.isOpen = true
    },
    closeAddUserModal: state => {
      state.isOpen = false
      state.step = 0
    },
    nextStepModal: (state, action: PayloadAction<ModalState['step']>) => {
      state.step = action.payload
    },
    choiceUserType: (state, action: PayloadAction<ModalState['userType']>) => {
      state.userType = action.payload
    },
    cancelStepModal: state => {
      state.isOpen = false
      state.step = 0
      state.duplicate.isIdDuplicate = false
      state.duplicate.isNicknameDuplicate = false
      state.duplicate.isButtonEnabled = false
    },
    addUserData: (state, action: PayloadAction<ModalState['target']>) => {
      state.target = action.payload
    },

    setIdDuplicate: (
      state,
      action: PayloadAction<ModalState['duplicate']['isIdDuplicate']>,
    ) => {
      state.duplicate.isIdDuplicate = action.payload
      state.duplicate.isButtonEnabled =
        state.duplicate.isIdDuplicate && state.duplicate.isNicknameDuplicate
    },
    setNicknameDuplicate: (
      state,
      action: PayloadAction<ModalState['duplicate']['isNicknameDuplicate']>,
    ) => {
      state.duplicate.isNicknameDuplicate = action.payload
      state.duplicate.isButtonEnabled =
        state.duplicate.isIdDuplicate && state.duplicate.isNicknameDuplicate
    },
  },
  selectors: {
    selectAddModalState: (state: ModalState) => state,
  },
})
export const addActions = addUserSlice.actions
const addUserModalReducer = addUserSlice.reducer
export const addUserModalSelector = addUserSlice.selectors
export default addUserModalReducer
