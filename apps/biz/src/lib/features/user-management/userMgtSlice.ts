import { type BizProjectUserListDto } from '@pims-frontend/apis/lib/features/pms/projectUser/request/ProjectUserReqDto'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type UserSelectionState = { usrId: string; pjtUsrUid: string; usrNm: string }

type UserMgtState = {
  resetModal: {
    step: number
    isOpen: boolean
    resetTarget: BizProjectUserListDto | null
    resetTargets: UserSelectionState[]
    generatedPassword: string | null
  }
}

const initialUserMgtState: UserMgtState = {
  resetModal: {
    step: -1,
    isOpen: false,
    resetTarget: null,
    resetTargets: [],
    generatedPassword: null,
  },
}

const userMgtSlice = createSlice({
  name: 'userMgt',
  initialState: initialUserMgtState,
  reducers: {
    openResetModal(state, action: PayloadAction<BizProjectUserListDto>) {
      state.resetModal.isOpen = true
      state.resetModal.resetTarget = action.payload
      state.resetModal.step = 1
    },
    openMultiResetModal(state, action: PayloadAction<UserSelectionState[]>) {
      state.resetModal.isOpen = true
      state.resetModal.resetTargets = action.payload // 다중 사용자 처리
      state.resetModal.step = 1
    },
    nextStepResetModal(state) {
      state.resetModal.step = 2
      state.resetModal.generatedPassword = [...Array(10)]
        .map(() => (~~(Math.random() * 36)).toString(36))
        .join('')
    },

    clearResetTargets(state) {
      state.resetModal.resetTargets = [] // 모든 대상 초기화
    },
    closeResetModal(state) {
      state.resetModal.isOpen = false
      state.resetModal.resetTargets = [] // 모든 대상 초기화
      state.resetModal.resetTarget = null
      state.resetModal.step = -1
    },
  },
  selectors: {
    selectUserMgt: (state: UserMgtState) => state,
  },
})

export const userMgtActions = userMgtSlice.actions
const userMgtReducer = userMgtSlice.reducer
export const userMgtSelectors = userMgtSlice.selectors
export default userMgtReducer
