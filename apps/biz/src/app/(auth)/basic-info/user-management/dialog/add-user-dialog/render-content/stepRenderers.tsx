import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@pims-frontend/ui/components/base/shadcn/dialog'
import type { UseFormReturn } from '@pims-frontend/ui/lib/react-hook-form/index'

import ChoiceUserType from '../choice-user-type'
import type { BizAddUserInfo } from '../partner-contents/biz-add-uesr-dialog'
import BizAddUserForm from '../partner-contents/biz-add-user-form'
import BizAddUserSubProject from '../partner-contents/biz-add-user-subproject'
import { BizAddSkUser } from '../sk-contents/biz-add-sk-user'

// 컴포넌트 렌더링 로직을 분리한 함수
export const RenderStepContent = (
  step: number,
  userType: string,
  form: UseFormReturn<BizAddUserInfo>,
) => {
  switch (userType) {
    case 'sk': // SK 플로우
      if (step === 0) {
        return (
          <>
            <DialogHeader>
              <DialogTitle>SK 사용자 추가</DialogTitle>
              <DialogDescription>SK 사용자를 추가합니다.</DialogDescription>
            </DialogHeader>
            <ChoiceUserType {...form} />
          </>
        )
      } else if (step === 1) {
        return (
          <>
            <DialogHeader>
              <DialogTitle>SK 직원 추가</DialogTitle>
              <DialogDescription>
                서브브프로젝트에 선택한 사용자를 추가하고 권한을 할당합니다.
              </DialogDescription>
            </DialogHeader>
            <BizAddSkUser />
          </>
        )
      }
      break

    case 'partner': // 협력사 플로우
      if (step === 0) {
        return (
          <>
            <DialogHeader>
              <DialogTitle>협력사 사용자 추가</DialogTitle>
              <DialogDescription>협력사 사용자를 추가합니다.</DialogDescription>
            </DialogHeader>
            <ChoiceUserType {...form} />
          </>
        )
      } else if (step === 1) {
        return (
          <>
            <DialogHeader>
              <DialogTitle>협력사 사용자 정보 입력</DialogTitle>
              <DialogDescription>
                협력사 사용자 정보를 입력하세요.
              </DialogDescription>
            </DialogHeader>
            <BizAddUserForm {...form} />
          </>
        )
      } else if (step === 2) {
        return (
          <>
            <DialogHeader>
              <DialogTitle>협력사 서브프로젝트 할당</DialogTitle>
              <DialogDescription>
                협력사 사용자에게 서브프로젝트 및 권한을 할당합니다.
              </DialogDescription>
            </DialogHeader>
            <BizAddUserSubProject {...form} />
          </>
        )
      }
      break

    default:
      return null
  }
}
