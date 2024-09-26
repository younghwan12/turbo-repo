import {
  useLazyGetCheckIdQuery,
  useLazyGetCheckUsrNikQuery,
} from '@pims-frontend/apis/lib/features/pms/projectUser/controller/ProjectUserController'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import {
  addActions,
  addUserModalSelector,
} from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@pims-frontend/ui/components/base/shadcn/form'
import { Input } from '@pims-frontend/ui/components/base/shadcn/input'
import type { UseFormReturn } from '@pims-frontend/ui/lib/react-hook-form/index'
import { useState } from 'react'

import type { BizAddUserInfo } from './biz-add-uesr-dialog'

const BizAddUserForm = (props: UseFormReturn<BizAddUserInfo>) => {
  const dispatch = useAppDispatch()
  const isChecked = useAppSelector(addUserModalSelector.selectAddModalState)
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)
  const [triggerCheckId] = useLazyGetCheckIdQuery()
  const [triggerCheckNicNm] = useLazyGetCheckUsrNikQuery()
  const [idCheckMessage, setIdCheckMessage] = useState<string | null>(null) // ID 체크 결과 메시지 상태
  const [nicknameCheckMessage, setNicknameCheckMessage] = useState<
    string | null
  >(null) // 닉네임 체크 결과 메시지 상태

  // ID 중복 확인 핸들러
  const handleCheckDuplicateId = async () => {
    const usrId = props.getValues('usrId')
    if (target?.pjtUid) {
      try {
        const result = await triggerCheckId({
          usrId: usrId,
          pjtUid: target?.pjtUid,
        }).unwrap()

        if (result) {
          dispatch(addActions.setIdDuplicate(true))
          setIdCheckMessage('사용 가능한 ID입니다.')
        } else {
          setIdCheckMessage('이미 사용 중인 ID입니다.')
        }
      } catch (error) {
        setIdCheckMessage('ID 중복 확인 중 오류가 발생했습니다.')
      }
    }
  }

  const handleCheckDuplicateNickname = async () => {
    const usrNik = props.getValues('usrNik')

    if (target?.pjtUid) {
      try {
        const result = await triggerCheckNicNm({
          usrNik: usrNik,
          pjtUid: target?.pjtUid,
        }).unwrap()

        if (result) {
          dispatch(addActions.setNicknameDuplicate(true))
          setNicknameCheckMessage('사용 가능한 닉네임입니다.')
        } else {
          setNicknameCheckMessage('이미 사용 중인 닉네임입니다.')
        }
      } catch (error) {
        setNicknameCheckMessage('닉네임 중복 확인 중 오류가 발생했습니다.')
      }
    }
  }

  // 사용자가 입력을 수정하면 중복 상태 초기화
  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue('usrId', e.target.value)
    dispatch(addActions.setIdDuplicate(false)) // 중복 체크 상태 초기화
    setIdCheckMessage(null) // 메시지 초기화
  }

  const handleNicknameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    props.setValue('usrNik', e.target.value)
    dispatch(addActions.setNicknameDuplicate(false)) // 중복 체크 상태 초기화
    setNicknameCheckMessage(null) // 메시지 초기화
  }

  return (
    <div className="my-10 px-5 space-y-4">
      <FormField
        control={props.control}
        rules={{
          required: '사용자명을 입력해주세요.',
        }}
        name="usrNm"
        render={({ field }) => (
          <FormItem className="flex flex-col items-baseline gap-0">
            <FormLabel className="">사용자명</FormLabel>
            <FormControl>
              <Input {...field} placeholder="이름 입력" />
            </FormControl>
          </FormItem>
        )}
      />
      <div>
        <div className="flex items-end justify-between gap-2">
          <FormField
            control={props.control}
            rules={{
              required: 'ID를 입력해주세요.',
            }}
            name="usrId"
            render={({ field }) => (
              <FormItem className="flex flex-col items-stretch flex-1 gap-0">
                <FormLabel className="">ID</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={`${isChecked.duplicate.isIdDuplicate ? 'border-primary-assistive-1' : 'border-red-600'}`}
                    placeholder="ID 입력 (최대 NN자)"
                    onChange={handleIdInputChange} // 사용자 입력이 있을 때 상태 초기화
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            variant={'outline'}
            type="button"
            disabled={isChecked.duplicate.isIdDuplicate}
            className="border-primary-normal text-primary-normal"
            onClick={handleCheckDuplicateId}
          >
            중복확인
          </Button>
        </div>
        {idCheckMessage && (
          <p
            className={`text-sm mt-1 ${isChecked.duplicate.isIdDuplicate ? 'text-primary-assistive-1' : 'text-red-600'}`}
          >
            {idCheckMessage}
          </p>
        )}
      </div>
      <div>
        <div className="flex items-end justify-between gap-2">
          <FormField
            control={props.control}
            rules={{
              required: '닉네임을 입력해주세요.',
            }}
            name="usrNik"
            render={({ field }) => (
              <FormItem className="flex flex-col items-baseline flex-1 gap-0">
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={`${isChecked.duplicate.isNicknameDuplicate ? 'border-primary-assistive-1' : 'border-red-600'}`}
                    placeholder="닉네임 입력 (최대 NN자)"
                    onChange={handleNicknameInputChange} // 사용자 입력이 있을 때 상태 초기화
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            variant={'outline'}
            type="button"
            disabled={isChecked.duplicate.isNicknameDuplicate}
            onClick={handleCheckDuplicateNickname}
            className="border-primary-normal text-primary-normal"
          >
            중복확인
          </Button>
        </div>
        {nicknameCheckMessage && (
          <p
            className={`text-sm mt-1 ${isChecked.duplicate.isNicknameDuplicate ? 'text-primary-assistive-1' : 'text-red-600'}`}
          >
            {nicknameCheckMessage}
          </p>
        )}
      </div>
      {/* <FormField
        control={props.control}
        rules={{
          required: '소속을 입력해주세요.',
        }}
        name="copCd"
        render={({ field }) => (
          <FormItem className="flex flex-col items-baseline gap-0">
            <FormLabel className="">소속</FormLabel>
            <FormControl>
              <Input {...field} placeholder="회사명 입력" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={props.control}
        rules={{
          required: '부서를 입력해주세요.',
        }}
        name="orzCd"
        render={({ field }) => (
          <FormItem className="flex flex-col items-baseline gap-0">
            <FormLabel className="">부서</FormLabel>
            <FormControl>
              <Input {...field} placeholder="부서명 입력" />
            </FormControl>
          </FormItem>
        )}
      /> */}
    </div>
  )
}

export default BizAddUserForm
