'use client'

import {
  useGetProjectUserDetailQuery,
  useLazyGetCheckUsrNikQuery,
  useUpdateProjectUserInfoMutation,
} from '@pims-frontend/apis/lib/features/pms/projectUser/controller/ProjectUserController'
import { type BizProjectUserListDto } from '@pims-frontend/apis/lib/features/pms/projectUser/request/ProjectUserReqDto'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import {
  addActions,
  addUserModalSelector,
} from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
import {
  format,
  parse,
} from '@pims-frontend/ui/components/base/shadcn/date-fns'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@pims-frontend/ui/components/base/shadcn/form'
import { Input } from '@pims-frontend/ui/components/base/shadcn/input'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import { Combobox } from '@pims-frontend/ui/components/base/shadcn/select'
import { SheetDescription } from '@pims-frontend/ui/components/base/shadcn/sheet'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import type { DateRange } from '@pims-frontend/ui/lib/react-day-picker/index'
import { useForm } from '@pims-frontend/ui/lib/react-hook-form/index'
import { cn } from '@pims-frontend/ui/lib/utils'
import React, { forwardRef, useEffect, useState } from 'react'
import { z } from 'zod'

import { selectOptions, selectPutInOptions } from '../biz-user-grid-sheet'
import BizUserDetailRoleSelect from './biz-user-detail-role-select'

export const UserBaseInfoFormSchema = z.object({
  usrId: z.string(),
  usrNm: z.string(),
  usrNik: z.string(),
  range: z
    .object({
      lbiStaYmd: z.coerce.date(),
      lbiEndYmd: z.coerce.date(),
    })
    .optional()
    .nullable(), //,
  copCd: z.string(),
  subPjtUid: z.string().array(),
  authority: z.string().array(),
  lbiStatCd: z.string(),
  wdrYmd: z.coerce.date(),
  rolCd: z.string().array(),
  prev: z.string(),
})

export type UserBaseInfo = z.infer<typeof UserBaseInfoFormSchema>

export type BizUserBaseInfoFormProps = {
  data: BizProjectUserListDto | null
}

export const BizUserBaseInfoForm = forwardRef<
  HTMLFormElement,
  BizUserBaseInfoFormProps
>(function WrappedUserBaseInfoForm({ data }, ref) {
  const dispatch = useAppDispatch()
  const isChecked = useAppSelector(addUserModalSelector.selectAddModalState)
  const pjtUsrUid = data?.pjtUsrUid ?? 0 // Default to 0 if undefined
  const toast = useToast()
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)
  const { data: userDetailInfo, isLoading: userDetailInfoLoading } =
    useGetProjectUserDetailQuery({
      pjtUsrUid: data?.pjtUsrUid ?? 0,
      pjtUid: target.pjtUid,
    })
  const [triggerCheckNicNm] = useLazyGetCheckUsrNikQuery()
  const [update] = useUpdateProjectUserInfoMutation()
  const [nicknameCheckMessage, setNicknameCheckMessage] = useState<
    string | null
  >(null) // 닉네임 체크 결과 메시지 상태
  const form = useForm<UserBaseInfo>({
    defaultValues: {
      ...userDetailInfo,
      range:
        userDetailInfo?.staYmd && userDetailInfo?.endYmd
          ? {
              lbiStaYmd: parse(userDetailInfo.staYmd, 'yyyyMMdd', new Date()),
              lbiEndYmd: parse(userDetailInfo.staYmd, 'yyyyMMdd', new Date()),
            }
          : undefined,
    },
  })

  const formatDate = (date: Date) => {
    return format(date, 'yyyy.MM.dd')
  }

  useEffect(() => {
    if (userDetailInfo) {
      const { usrNm, usrId, companyCode } = userDetailInfo
      form.reset({
        usrId: usrId,
        usrNm: usrNm,
        usrNik: usrNm,
        copCd: companyCode,
        lbiStatCd: '',
        wdrYmd: new Date(),
        rolCd: [],
        // authority: [],
        subPjtUid: [],
        prev: '',
      })
    }
  }, [userDetailInfo, form])

  const handleCheckDuplicateNickname = async () => {
    const usrNik = form.getValues('usrNik')

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

  const handleNicknameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    form.setValue('usrNik', e.target.value)
    dispatch(addActions.setNicknameDuplicate(false)) // 중복 체크 상태 초기화
    setNicknameCheckMessage(null) // 메시지 초기화
  }

  function onSubmit(data: UserBaseInfo) {
    const { range, wdrYmd, ...rest } = data
    if (range && wdrYmd) {
      const lbiStaYmd = format(range?.lbiStaYmd, 'yyyyMMdd')
      const lbiEndYmd = format(range?.lbiEndYmd, 'yyyyMMdd')
      const wdrYmdData = format(wdrYmd, 'yyyyMMdd')
      const data = {
        ...rest,
        lbiStaYmd,
        lbiEndYmd,
        wdrYmd: wdrYmdData,
        pjtUid: target.pjtUid,
        pjtUsrUid: pjtUsrUid,
      }
      //console.log('datara', data)
      if (target) {
        update(data)
          .unwrap()
          .then(() => {
            toast.toast({
              title: '사용자 정보가 업데이트 되었습니다.',
            })
          })
      }
    }
  }
  if (userDetailInfoLoading) {
    return <div>로딩중.....</div>
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        ref={ref}
        className="flex flex-col gap-16 py-2 mb-10 px-10"
      >
        <div>
          <SheetDescription>기본정보</SheetDescription>
          <FormField
            control={form.control}
            name="usrId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="min-w-10">아이디</FormLabel>
                <FormControl>
                  <Input {...field} disabled />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usrNm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="min-w-10">이름</FormLabel>
                <FormControl>
                  <Input {...field} disabled />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex flex-col">
            <div className="flex items-end justify-between gap-2">
              <FormField
                control={form.control}
                rules={{
                  required: '닉네임을 입력해주세요.',
                }}
                name="usrNik"
                render={({ field }) => (
                  <FormItem className="flex items-baseline flex-1 gap-0">
                    <FormLabel className="min-w-20">닉네임</FormLabel>
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
                className={`text-sm ml-20 mt-1 ${isChecked.duplicate.isNicknameDuplicate ? 'text-primary-assistive-1' : 'text-red-600'}`}
              >
                {nicknameCheckMessage}
              </p>
            )}
            <p className="pl-20 py-2 col-span-3 text-sm text-gray-500">
              동명이인 간의 혼동을 방지하기 위해 구별할 수 있는 추가 정보를
              제공해 입력해 주세요. ex. 홍길동_디자이너 또는 홍길로A
            </p>
          </div>
          <FormField
            control={form.control}
            name="copCd"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="min-w-10">회사</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2 mt-2">
            <FormField
              control={form.control}
              name="rolCd.0"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="min-w-10">역할</FormLabel>
                  <FormControl>
                    <Combobox
                      selectOptions={[
                        { value: 'non-developer', displayString: '비개발' },
                        {
                          value: 'developer',
                          displayString: '개발',
                        },
                        {
                          value: 'designer',
                          displayString: '디자인',
                        },
                      ]}
                      value={field.value}
                      onValueChange={field.onChange}
                      className="w-[200px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="roleDescription"
              render={({ field }) => (
                <FormItem className="w-full space-y-0">
                  <FormControl>
                    <Input defaultValue={''} {...field} />
                  </FormControl>
                </FormItem>
              )}
            /> */}
          </div>
        </div>

        <div>
          <SheetDescription>투입 상태</SheetDescription>
          <FormField
            control={form.control}
            name="lbiStatCd"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="min-w-10">투입</FormLabel>
                <FormControl>
                  <BizUserDetailRoleSelect
                    className="max-w-[488px]"
                    selectOptions={selectPutInOptions}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="authority.0"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="min-w-10">권한</FormLabel>
                <FormControl>
                  <BizUserDetailRoleSelect
                    className="max-w-[488px]"
                    selectOptions={selectOptions}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="range"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="w-12">투입 기간</FormLabel>
                <FormControl>
                  <div className={cn('w-full')}>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={'outline'}
                          className={cn(
                            'w-full justify-start !mt-0',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          <ParameterizedIcon
                            name="Calendar"
                            className="w-4 h-4 mr-2"
                          />
                          {field.value?.lbiStaYmd &&
                            formatDate(field.value?.lbiStaYmd)}
                          {/* {field.value?.lbiStaYmd} */}
                          {field.value?.lbiStaYmd && ' - '}
                          {/* {field.value?.to} */}
                          {field.value?.lbiEndYmd &&
                            formatDate(field.value?.lbiEndYmd)}
                          {!field.value?.lbiStaYmd && (
                            <span>날짜를 선택하세요.</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={field.value?.lbiStaYmd}
                          selected={{
                            from: field.value?.lbiStaYmd,
                            to: field.value?.lbiEndYmd,
                          }}
                          onSelect={(range: DateRange | undefined) => {
                            field.onChange(
                              range
                                ? {
                                    lbiStaYmd: range.from ?? null,
                                    lbiEndYmd: range.to ?? null,
                                  }
                                : null,
                            )
                          }}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="wdrYmd"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="min-w-10">철수일</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] justify-start text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        <ParameterizedIcon
                          name="Calendar"
                          className="w-4 h-4 mr-2"
                        />
                        {field?.value
                          ? format(field.value, 'yyyy.MM.dd')
                          : '철수일을 선택해주세요!'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        defaultMonth={field?.value}
                        selected={field?.value}
                        onSelect={date => {
                          if (date) {
                            field.onChange(date)
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prev"
            render={({ field }) => (
              <FormItem className="w-full space-y-2">
                <FormLabel className="min-w-10">기존인력</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
})
