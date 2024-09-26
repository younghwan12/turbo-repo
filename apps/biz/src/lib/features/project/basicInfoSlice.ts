import { type SubProjectInfo } from '@pims-frontend/apis/lib/features/pms/project/dto/response/SubProjectResDto'
import { createSlice } from '@reduxjs/toolkit'

export type BasicInfoState = {
  subPjtDrawer: {
    isSubPjtDrawerOpen: boolean
    selSubPjt: SubProjectInfo | null
  }
  isSubPjtDialogOpen: boolean
  isSubPjtWitDialogOpen: boolean

  delSubPjtDialog: {
    isDelSubPjtDialogOpen: boolean
    selSubPjt: SubProjectInfo[] | null
  }

  isSubGrpDialogOpen: boolean
}

const initialbasicInfoState: BasicInfoState = {
  subPjtDrawer: {
    isSubPjtDrawerOpen: false,
    selSubPjt: null,
  },
  isSubPjtDialogOpen: false,
  isSubPjtWitDialogOpen: false,

  delSubPjtDialog: {
    isDelSubPjtDialogOpen: false,
    selSubPjt: null,
  },

  isSubGrpDialogOpen: false,
}

const basicInfoSlice = createSlice({
  name: 'basicInfo',
  initialState: initialbasicInfoState,
  reducers: {
    openSubPjtDrawer(state, action) {
      state.subPjtDrawer.isSubPjtDrawerOpen = true
      state.subPjtDrawer.selSubPjt = action.payload
    },
    closeSubPjtDrawer(state) {
      state.subPjtDrawer.isSubPjtDrawerOpen = false
      state.subPjtDrawer.selSubPjt = null
    },

    openAddSubPjtDialog(state) {
      state.isSubPjtDialogOpen = true
    },
    closeSubPjtDialog(state) {
      state.isSubPjtDialogOpen = false
    },

    openSubGrpDialog(state) {
      state.isSubGrpDialogOpen = true
    },
    closeSubGrpDialog(state) {
      state.isSubGrpDialogOpen = false
    },

    openSubPjtWitDialog(state) {
      state.isSubPjtWitDialogOpen = true
    },
    closeSubPjtWitDialog(state) {
      state.isSubPjtWitDialogOpen = false
    },

    openDelSubPjtDialog(state, action) {
      state.delSubPjtDialog.isDelSubPjtDialogOpen = true
      state.delSubPjtDialog.selSubPjt = action.payload
    },
    closeDelSubPjtDialog(state) {
      state.delSubPjtDialog.isDelSubPjtDialogOpen = false
      state.delSubPjtDialog.selSubPjt = null
    },
  },
  selectors: {
    selectState: (state: BasicInfoState) => state,
    selectSubPjtDrawer: (state: BasicInfoState) => state.subPjtDrawer,
  },
})

export const basicInfoActions = basicInfoSlice.actions
const basicInfoReducer = basicInfoSlice.reducer
export const basicInfoSelectors = basicInfoSlice.selectors
export default basicInfoReducer
