'use client'

import { InputIcon } from '@pims-frontend/ui/components/base/shadcn/input-icon'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { projectActions, projectSelectors } from './projectSlice'

const SearchProject = () => {
  const dispatch = useAppDispatch()
  const searchText = useAppSelector(
    projectSelectors.selectProjectListSearchText,
  )

  return (
    <InputIcon
      placeholder="프로젝트명, PM이름, SK사번"
      startIcon="Search"
      className="min-w-80"
      value={searchText}
      onChange={e => {
        dispatch(projectActions.onProjectListSearchTextChange(e.target.value))
      }}
    />
  )
}

export default SearchProject
