'use client'

import { type ProjectResDto } from '@pims-frontend/apis/lib/features/pms/project/dto/response/ProjectResDto'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { BadgeStatus } from '@pims-frontend/ui/components/base/shadcn/badge'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@pims-frontend/ui/components/base/shadcn/command'
import {
  format,
  parse,
} from '@pims-frontend/ui/components/base/shadcn/date-fns'
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@pims-frontend/ui/components/base/shadcn/select'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { Textarea } from '@pims-frontend/ui/components/base/shadcn/textarea'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import type { DateRange } from '@pims-frontend/ui/lib/react-day-picker/index'
import { useForm } from '@pims-frontend/ui/lib/react-hook-form/index'
import { cn } from '@pims-frontend/ui/lib/utils'
import { z } from '@pims-frontend/ui/lib/zod/index'
import { forwardRef } from 'react'

import { useGetAllCodeDetailsQuery } from '../../../../../../../shared/apis/src/lib/features/common/code/controller/CodeController'
import { useUpdateProjectPjMutation } from '../../../../../../../shared/apis/src/lib/features/pms/project/controller/ProjectController'
import { useGetProjectUserListQuery } from '../../../../../../../shared/apis/src/lib/features/pms/projectUser/controller/ProjectUserController'

//임시 프로젝트 진행 상태
// const selectOptions = [
//   {
//     value: 'AAA',
//     name: '준비중',
//   },
//   {
//     value: 'BBB',
//     name: '진행중',
//   },
//   {
//     value: 'CCC',
//     name: '종료',
//   },
//   {
//     value: 'DDD',
//     name: '예외',
//   },
// ]

export const ProjectInfoFormSchema = z.object({
  pjtNo: z.string(),
  pjtNm: z.string(),
  pjtDesc: z.string(),
  pjtMngRId: z.string(),
  pgsStatCd: z.string(),
  rpnDepCd: z.string(),
  range: z.object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  }),
})

export type ProjectInfo = z.infer<typeof ProjectInfoFormSchema>

export type ProjectInfoFormProps = {
  defaultValues: ProjectResDto
  //   #TODO
}

export const ProjectInfoForm = forwardRef<
  HTMLFormElement,
  ProjectInfoFormProps
>(function WrappedProjectInfoForm(props, ref) {
  const [update] = useUpdateProjectPjMutation()
  const { toast } = useToast()
  const { endYmd, staYmd, ...rest } = props.defaultValues

  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)

  const { data: userList } = useGetProjectUserListQuery({
    pjtUid: target?.pjtUid ?? 6,
  })

  const { data: codeList } = useGetAllCodeDetailsQuery({
    codeGroupId: 'PJT_PGS_STAT_CD',
  })

  const form = useForm<ProjectInfo>({
    defaultValues: {
      ...rest,
      pjtDesc: rest?.pjtDesc ?? '',
      range: {
        from: parse(staYmd, 'yyyyMMdd', new Date()),
        to: parse(endYmd, 'yyyyMMdd', new Date()),
      },
    },
  })

  function onSubmit(data: ProjectInfo) {
    const { range, ...rest } = data
    const staYmd = format(range.from, 'yyyyMMdd')
    const endYmd = format(range.to, 'yyyyMMdd')
    update({
      pjtUid: props.defaultValues.pjtUid,
      staYmd: staYmd,
      endYmd: endYmd,
      ...rest,
    })
      .unwrap()
      .then(() => {
        toast({
          title: '프로젝트 정보가 업데이트 되었습니다.',
        })
      })
  }

  const formatDate = (date: Date) => {
    return format(date, 'yyyy.MM.dd')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        ref={ref}
        className="flex flex-col gap-5 mr-72"
      >
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="pjtNm"
            render={({ field }) => (
              <FormItem className="justify-between gap-56">
                <div className="min-w-[80px] whitespace-nowrap">
                  <FormLabel>프로젝트명</FormLabel>
                </div>
                <FormControl>
                  <Input {...field} className="!mt-0 max-w-full" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pjtDesc"
            render={({ field }) => (
              <FormItem className="justify-between gap-56">
                <div className="min-w-[80px] whitespace-nowrap">
                  <FormLabel>소개</FormLabel>
                </div>
                <FormControl className="!mt-0">
                  <div className="w-full flex flex-col gap-1.5">
                    <Textarea {...field} className="!mt-0 !max-w[324.3px]" />
                    <p className="text-sm text-muted-foreground text-right">
                      {field.value.length} / 50
                    </p>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <FormField
          control={form.control}
          name="pjtMngRId"
          render={({ field }) => (
            <FormItem className="justify-between gap-56">
              <div className="min-w-[80px] whitespace-nowrap">
                <FormLabel>프로젝트 관리자 PM</FormLabel>
              </div>
              <FormControl>
                <Popover>
                  <div className="flex flex-col gap-1.5 w-full !mt-0">
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-full justify-between max-w-full',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        <div className="flex gap-2 items-center">
                          {userList &&
                            userList.find(user => user.usrId === field.value)
                              ?.usrNm}
                        </div>
                        <ParameterizedIcon
                          name="ChevronDown"
                          className="ml-2 h-4 w-4 shrink-0 opacity-50"
                        />
                      </Button>
                    </PopoverTrigger>
                    <FormDescription>
                      프로젝트 관리자 PM으로 지정된 사용자는 PM 권한과
                      현장관리자 권한을 부여받습니다
                    </FormDescription>
                  </div>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="사용자를 검색하세요." />
                      <CommandList>
                        <CommandEmpty>검색결과가 없습니다.</CommandEmpty>
                        <CommandGroup>
                          {userList &&
                            userList.map(user => (
                              <CommandItem
                                value={user.usrId}
                                key={user.pjtUsrUid}
                                onSelect={() => {
                                  form.setValue('pjtMngRId', user.usrId)
                                  //FIXME B/E
                                  form.setValue('rpnDepCd', user.companyCode)
                                }}
                              >
                                <ParameterizedIcon
                                  name="Check"
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    user.usrId === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0',
                                  )}
                                />
                                {user.usrNm} / {user.companyCode}
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="range"
          render={({ field }) => (
            <FormItem className="justify-between gap-56">
              <div className="min-w-[80px] whitespace-nowrap">
                <FormLabel>프로젝트 기간</FormLabel>
              </div>
              <FormControl>
                <Popover>
                  <div className="flex flex-col gap-1.5 w-full !mt-0">
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start max-w-full',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        <ParameterizedIcon
                          name="Calendar"
                          className="h-4 w-4"
                        />
                        {field.value?.from && formatDate(field.value?.from)}
                        {field.value?.from && ' - '}
                        {field.value?.to && formatDate(field.value.to)}
                        {!field.value?.from && <span>날짜를 선택하세요.</span>}
                      </Button>
                    </PopoverTrigger>
                    <FormDescription>
                      기간은 프로젝트 달력과 연동됩니다
                    </FormDescription>
                  </div>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      selected={field.value}
                      onSelect={(range: DateRange | undefined) => {
                        if (range) {
                          field.onChange({
                            from: range.from
                              ? format(range.from, 'yyyy.MM.dd')
                              : undefined,
                            to: range.to
                              ? format(range.to, 'yyyy.MM.dd')
                              : undefined,
                          })
                        }
                      }}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="pgsStatCd"
          render={({ field }) => (
            <FormItem className="justify-between gap-56">
              <FormLabel className="min-w-[80px] whitespace-nowrap">
                프로젝트 진행 상태
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={'hello'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {codeList &&
                        codeList.map(option => (
                          <SelectItem key={option.codeId} value={option.codeId}>
                            <BadgeStatus size={'md'} background="default">
                              {option.codeValue}
                            </BadgeStatus>
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
})

ProjectInfoForm.displayName = 'ProjectInfoForm'
