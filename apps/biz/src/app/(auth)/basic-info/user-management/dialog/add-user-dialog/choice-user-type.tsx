import {
  addActions,
  addUserModalSelector,
} from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import type { MouseEvent } from 'react'
import { useCallback } from 'react'

const ChoiceUserType = (props: any) => {
  const { userType } = useAppSelector(addUserModalSelector.selectAddModalState)

  const dispatch = useAppDispatch()

  const handleButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const $button = e.target as HTMLButtonElement
      dispatch(addActions.choiceUserType($button.name))
      props.setValue('usrTyp', $button.name)
    },
    [dispatch, props],
  )

  return (
    <div className="flex flex-col space-y-4 text-left my-5 px-5">
      <Button
        name="partner"
        aria-label="partner"
        className={`flex justify-start px-4 py-8 text-[16px] border-2 ${userType === 'partner' ? 'border-primary-normal text-primary-heavy bg-primary-accent' : ''}`}
        variant={'outline'}
        onClick={handleButtonClick}
      >
        협력사 직원 추가
      </Button>
      <Button
        name="sk"
        aria-label="sk"
        variant={'outline'}
        onClick={handleButtonClick}
        className={`flex justify-start px-4 text-[16px] py-8 border-2  ${userType === 'sk' ? 'border-primary-normal text-primary-heavy bg-primary-accent' : ''}`}
      >
        SK 직원 추가
      </Button>
    </div>
  )
}

export default ChoiceUserType
