'use client'

import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
import { format } from '@pims-frontend/ui/components/base/shadcn/date-fns'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@pims-frontend/ui/components/base/shadcn/form'
import { Input } from '@pims-frontend/ui/components/base/shadcn/input'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import { safeParseMultiFormatAndFormat } from '@pims-frontend/ui/lib/dateFnsAdditionalUtils'
import { DateRange } from '@pims-frontend/ui/lib/react-day-picker/index'
import { useForm } from '@pims-frontend/ui/lib/react-hook-form/index'
import { cn } from '@pims-frontend/ui/lib/utils'
import { forwardRef } from 'react'
import { z } from 'zod'
import { ProjectProgressStatusCodeCombobox } from '../code/project-progress-status-code-combobox'
import { UserPopover } from '../user/user-popover'
import { useCreateProjectMutation } from './controller/ProjectController'

export const ProjectBaseAddFormSchema = z.object({
  pjtUid: z.string(),
  pjtNo: z.string(),
  pjtNm: z.string(),
  pgsStatCd: z.string(),
  pjtMngRId: z.string(),
  range: z.object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  }),
})

export type ProjectBaseAddInfo = z.infer<typeof ProjectBaseAddFormSchema>

export type ProjectBaseAddFormProps = {
  defaultValues?: Partial<ProjectBaseAddInfo> | null
}

const ProjectBaseAddForm = forwardRef<HTMLFormElement, ProjectBaseAddFormProps>(
  function WrappedProjectBaseAddForm(props, ref) {
    const [create, { isLoading, isError }] = useCreateProjectMutation()

    const form = useForm<ProjectBaseAddInfo>({
      defaultValues: props.defaultValues || {
        pgsStatCd: '001',
        range: {},
        pjtMngRId: '',
        pjtNo: '',
        pjtNm: '',
        pjtUid: '',
      },
      reValidateMode: 'onBlur',
    })

    function onSubmit(data: ProjectBaseAddInfo) {
      const { range, ...rest } = data
      const staYmd = format(range.from, 'yyyyMMdd')
      const endYmd = format(range.to, 'yyyyMMdd')
      // FIXME 부서코드 추 후 수정
      create({
        ...rest,
        staYmd: staYmd,
        endYmd: endYmd,
        rpnDepCd: '001',
        tplEnabled: false,
        subGrpEnabled: false,
        deleted: false,
      }).unwrap()
    }

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          ref={ref}
          className="flex flex-col gap-6 px-9 py-4"
        >
          <FormField
            control={form.control}
            name="pjtNo"
            rules={{
              required: '프로젝트NO를 입력하세요.',
              maxLength: {
                value: 20,
                message: '프로젝트NO는 20자 이내로 입력하세요.',
              },
            }}
            render={({ field }) => (
              <FormItem className="flex-col gap-1.5 items-start">
                <FormLabel>프로젝트NO</FormLabel>
                <FormControl>
                  <Input {...field} className="!mt-0" />
                </FormControl>
                <FormDescription className="!mt-0">
                  20자 이내로 작성하세요
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-1.5 items-start">
            <FormLabel>프로젝트명</FormLabel>
            <div className="flex items-start w-full gap-1">
              <FormField
                control={form.control}
                name="pgsStatCd"
                render={({ field }) => (
                  <FormItem className="flex-row gap-1.5 items-start flex-1">
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
                  <FormItem className="flex-row gap-1.5 items-start flex-1">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="pjtMngRId"
            render={({ field }) => (
              <FormItem className="flex-col gap-1.5 items-start">
                <FormLabel>PM</FormLabel>
                <FormControl>
                  <UserPopover
                    placeholder={`관리자를 선택하세요.`}
                    standard={field.value}
                    onSelect={value => {
                      form.setValue('pjtMngRId', value)
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="range"
            render={({ field }) => (
              <FormItem className="flex-col gap-1.5 items-start">
                <FormLabel>기간</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-left !mt-0',
                          !field.value && 'text-muted-foreground',
                        )}
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
                              from: safeParseMultiFormatAndFormat(range.from),
                              to: safeParseMultiFormatAndFormat(range.to),
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
        </form>
      </Form>
    )
  },
)

export default ProjectBaseAddForm

ProjectBaseAddForm.displayName = 'ProjectBaseAddForm'
