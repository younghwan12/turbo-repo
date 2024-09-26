import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Input } from '@pims-frontend/ui/components/base/shadcn/input'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { useState } from 'react'

import { type SubProjectListState } from './partner-contents/biz-add-user-subproject'

type SearchInputProps = {
  items: SubProjectListState[]
  placeholder?: string
  displayKey: keyof SubProjectListState
  onItemSelected?: (item: SubProjectListState) => void
}

const SearchInput = ({
  items,
  placeholder = '검색',
  onItemSelected,
}: SearchInputProps) => {
  const [filteredItems] = useState<SubProjectListState[]>(items)
  const [triggerFetch, setTriggerFetch] = useState(false)
  // const [, setIsFocused] = useState(false)

  const handleInputFocus = () => {
    setTriggerFetch(true)
    // setIsFocused(true)
  }

  const handleInputBlur = () => {
    setTriggerFetch(false)
    // setIsFocused(false)
  }

  const handleItemClick = (item: SubProjectListState) => {
    if (onItemSelected) {
      onItemSelected(item)
    }
  }

  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        className="px-10"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <ParameterizedIcon name="Search" className="absolute top-2 left-2" />

      {triggerFetch ? (
        <div className="absolute top-12 rounded-lg w-full z-10 bg-white border-2">
          <ul className="w-full py-5 h-56 overflow-y-auto">
            <li className="px-10 py-2 hover:bg-primary-accent">전체</li>
            {filteredItems.map(list => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <li
                key={list.subPjtUid}
                className="px-10 py-2 hover:bg-primary-accent"
                onClick={() => handleItemClick(list)}
              >
                {list.subPjtNm}
              </li>
            ))}
          </ul>
          <footer className="flex justify-between mt-5 pb-5 px-5">
            <Button variant={'ghost'}>닫기</Button>
            <div>
              <Button variant={'outline'}>선택해제</Button>
              <Button variant={'default'}>적용완료</Button>
            </div>
          </footer>
        </div>
      ) : null}
    </div>
  )
}

export default SearchInput
