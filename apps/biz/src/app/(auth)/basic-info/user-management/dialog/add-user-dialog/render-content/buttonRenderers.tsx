import {
  addActions,
  addUserModalSelector,
} from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import type { UseFormReturn } from '@pims-frontend/ui/lib/react-hook-form/index'

import type { BizAddUserInfo } from '../partner-contents/biz-add-uesr-dialog'

// 버튼 렌더링 로직을 분리한 함수
export const RenderButtons = (
  step: number,
  userType: string,
  form: UseFormReturn<BizAddUserInfo>,
) => {
  const dispatch = useAppDispatch()
  const isButtonEnabled = useAppSelector(
    addUserModalSelector.selectAddModalState,
  )

  const handleNextClick = async () => {
    const isValid = await form.trigger() // 전체 폼 유효성 검사
    const formData = form.getValues()
    const formArr = []
    formArr.push(formData)

    if (isValid) {
      dispatch(addActions.addUserData(formArr))
      dispatch(addActions.nextStepModal(2))
    }
    return
  }
  switch (userType) {
    case 'sk': // SK 플로우
      if (step === 0) {
        return (
          <>
            <Button
              type="button"
              variant={'outline'}
              onClick={() => dispatch(addActions.closeAddUserModal())}
            >
              취소
            </Button>
            <Button
              type="button"
              onClick={() => dispatch(addActions.nextStepModal(1))}
            >
              다음으로
            </Button>
          </>
        )
      } else if (step === 1) {
        return (
          <>
            <Button
              type="button"
              variant={'outline'}
              onClick={() => dispatch(addActions.closeAddUserModal())}
            >
              취소
            </Button>
            <Button type="button" onClick={handleNextClick}>
              사용자 추가
            </Button>
          </>
        )
      }
      break

    case 'partner': // 협력사 플로우
      if (step === 0) {
        return (
          <>
            <Button
              type="button"
              variant={'outline'}
              onClick={() => dispatch(addActions.cancelStepModal())}
            >
              취소
            </Button>
            <Button
              type="button"
              onClick={() => dispatch(addActions.nextStepModal(1))}
            >
              다음으로
            </Button>
          </>
        )
      } else if (step === 1) {
        return (
          <>
            <Button
              type="button"
              variant={'outline'}
              onClick={() => dispatch(addActions.cancelStepModal())}
            >
              취소
            </Button>
            <Button
              type="button"
              disabled={!isButtonEnabled.duplicate.isButtonEnabled}
              onClick={handleNextClick}
            >
              다음으로
            </Button>
          </>
        )
      } else if (step === 2) {
        return (
          <>
            <Button
              type="button"
              variant={'outline'}
              onClick={() => dispatch(addActions.cancelStepModal())}
            >
              취소
            </Button>
            <div>
              <Button variant={'ghost'}>건너뛰기</Button>
              <Button type="submit">추가하기</Button>
            </div>
          </>
        )
      }
      break

    default:
      return null
  }
}
