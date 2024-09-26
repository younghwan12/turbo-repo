'use client'

import { useAppDispatch } from '@pims-frontend/biz/lib/hooks'
import { InputIcon } from '@pims-frontend/ui/components/base/shadcn/input-icon'
import React, { useState } from 'react'

import { scheduleActions } from '../scheduleSlice'

const SearchTextInput = () => {
  const [text, setText] = useState<string>('')
  const dispatch = useAppDispatch()

  return (
    <InputIcon
      placeholder="작업명, 담당자, 산출물"
      startIcon="Search"
      className="w-72"
      value={text}
      onChange={e => {
        setText(e.target.value)
      }}
      onKeyDown={e => {
        if (e.nativeEvent.isComposing) return // 한글 잘림 방지

        if (e.key === 'Enter') {
          dispatch(scheduleActions.setSearchText(text))
          setText('')
        }
      }}
    />
  )
}

export default SearchTextInput
