import { type ProjectResDto } from '@pims-frontend/apis/lib/features/pms/project/dto/response/ProjectResDto'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ProjectState = {
  isEditModalOpen: boolean
  editTarget: ProjectResDto | null
}

const initialProjectState: ProjectState = {
  isEditModalOpen: false,
  editTarget: null,
}

const projectSlice = createSlice({
  name: 'project',
  initialState: initialProjectState,
  reducers: {
    openEditModal(state, action: PayloadAction<ProjectResDto>) {
      state.isEditModalOpen = true
      state.editTarget = action.payload
    },
    closeEditModal(state) {
      state.isEditModalOpen = false
      state.editTarget = null
    },
    setModalOpen(state, action: PayloadAction<boolean>) {
      state.isEditModalOpen = action.payload
    },
  },
  selectors: {
    selectProject: (state: ProjectState) => state,
  },
})

export const projectActions = projectSlice.actions
const projectReducer = projectSlice.reducer
export const projectSelectors = projectSlice.selectors
export default projectReducer
