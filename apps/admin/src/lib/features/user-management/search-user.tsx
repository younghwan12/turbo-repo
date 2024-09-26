'use client'

import { InputIcon } from '@pims-frontend/ui/components/base/shadcn/input-icon'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { userManagementActions } from './userManagementSlice'

const SearchUser = () => {
  const [text, setText] = useState<string>('')

  const dispatch = useAppDispatch()

  return (
    <InputIcon
      placeholder="사용자명, 사번, 부서명, 회사명"
      startIcon="Search"
      className="min-w-96"
      value={text}
      onChange={e => {
        setText(e.target.value)
      }}
      onKeyDown={e => {
        if (e.nativeEvent.isComposing) return // 한글 잘림 방지

        if (e.key === 'Enter') {
          dispatch(userManagementActions.onUserListSearchTextChange(text))
          setText('')
        }
      }}
    />
  )
}

export default SearchUser
