'use client'

import { ProjectProgressStatusCodeCombobox } from '@pims-frontend/apis/lib/features/common/code/project-progress-status-code-combobox'
import { useUpdateProjectMutation } from '@pims-frontend/apis/lib/features/common/project/controller/ProjectController'
import { type ProjectResDto } from '@pims-frontend/apis/lib/features/common/project/dto/response/ProjectResDto'
import { UserPopover } from '@pims-frontend/apis/lib/features/common/user/user-popover'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
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
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import {
  safeParseMultiFormat,
  safeParseMultiFormatAndFormat,
} from '@pims-frontend/ui/lib/dateFnsAdditionalUtils'
import { type DateRange } from '@pims-frontend/ui/lib/react-day-picker/index'
import { useForm } from '@pims-frontend/ui/lib/react-hook-form/index'
import { cn } from '@pims-frontend/ui/lib/utils'
import { forwardRef } from 'react'
import { z } from 'zod'

export const ProjectBaseInfoFormSchema = z.object({
  pjtUid: z.number(),
  pjtNo: z.string(),
  pjtNm: z.string(),
  pgsStatCd: z.string(),
  pjtMngRId: z.string(),
  range: z.object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  }),
})

export type ProjectBaseInfo = z.infer<typeof ProjectBaseInfoFormSchema>

export type ProjectBaseInfoFormProps = {
  defaultValues: ProjectResDto | null
}

export const ProjectBaseInfoForm = forwardRef<
  HTMLFormElement,
  ProjectBaseInfoFormProps
>(function WrappedProjectBaseInfoForm(props, ref) {
  const [update, { isError }] = useUpdateProjectMutation()
  const { toast } = useToast()

  //FIXME 사용자, 부서코드
  const form = useForm<ProjectBaseInfo>({
    defaultValues:
      {
        ...props.defaultValues,
        range: {
          from: safeParseMultiFormat(props.defaultValues?.staYmd),
          to: safeParseMultiFormat(props.defaultValues?.endYmd),
        },
      } || {},
    reValidateMode: 'onChange',
  })

  function onSubmit(data: ProjectBaseInfo) {
    const { success } = ProjectBaseInfoFormSchema.safeParse(data)
    const { range, ...rest } = data
    const staYmd = safeParseMultiFormatAndFormat(range.from, 'yyyyMMdd')
    const endYmd = safeParseMultiFormatAndFormat(range.to, 'yyyyMMdd')

    if (!success) {
      return toast({
        title: '폼 검증에 실패했습니다.',
        variant: 'destructive',
      })
    }
    update({
      ...rest,
      staYmd: staYmd,
      endYmd: endYmd,
      rpnDepCd: '001',
      tplEnabled: false,
      subGrpEnabled: false,
      deleted: false,
    }).then(() => {
      if (isError) {
        return toast({
          title: '프로젝트 정보 수정에 실패했습니다.',
          variant: 'destructive',
        })
      }
      toast({
        title: '프로젝트 정보가 수정되었습니다.',
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        ref={ref}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="pjtNo"
          rules={{
            required: '프로젝트 번호를 입력하세요.',
            maxLength: {
              value: 20,
              message: '프로젝트 번호는 20자 이내로 입력하세요.',
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-10">NO</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pgsStatCd"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-10">상태</FormLabel>
              <FormControl>
                <ProjectProgressStatusCodeCombobox
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pjtNm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-10">이름</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="range"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-10">기간</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start disabled:bg-interaction-disable',
                          { 'text-muted-foreground': !field.value },
                        )}
                        disabled
                      >
                        <ParameterizedIcon
                          name="Calendar"
                          className="mr-2 h-4 w-4"
                        />
                        {field.value?.from &&
                          safeParseMultiFormatAndFormat(field.value?.from)}
                        {field.value?.from && ' - '}
                        {field.value?.to &&
                          safeParseMultiFormatAndFormat(field.value.to)}
                        {!field.value?.from && <span>날짜를 선택하세요.</span>}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      selected={field.value}
                      onSelect={(range: DateRange | undefined) => {
                        if (range) {
                          field.onChange({
                            from: safeParseMultiFormatAndFormat(range?.from),
                            to: safeParseMultiFormatAndFormat(range?.to),
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
        <FormField
          control={form.control}
          name="pjtNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-10">참조</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pjtMngRId"
          render={({ field }) => (
            <FormItem className="gap-12">
              <FormLabel className="w-10">{'PM '}</FormLabel>
              <FormControl>
                <UserPopover
                  placeholder={`관리자를 선택하세요.`}
                  standard={field.value}
                  defaultValue={field.value}
                  loadOnMount
                  onSelect={value => {
                    form.setValue('pjtMngRId', value)
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
})

ProjectBaseInfoForm.displayName = 'ProjectBaseInfoForm'
