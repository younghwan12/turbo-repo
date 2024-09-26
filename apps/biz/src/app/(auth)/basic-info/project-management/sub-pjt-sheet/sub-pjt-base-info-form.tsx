'use client'

import { useUpdateSubProjectPjMutation } from '@pims-frontend/apis/lib/features/pms/project/controller/ProjectController'
import type { SubProjectInfo } from '@pims-frontend/apis/lib/features/pms/project/dto/response/SubProjectResDto'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
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
import { Progress } from '@pims-frontend/ui/components/base/shadcn/progress'
import { Textarea } from '@pims-frontend/ui/components/base/shadcn/textarea'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import type { DateRange } from '@pims-frontend/ui/lib/react-day-picker/index'
import { useForm } from '@pims-frontend/ui/lib/react-hook-form/index'
import { cn } from '@pims-frontend/ui/lib/utils'
import { z } from '@pims-frontend/ui/lib/zod/index'
import { forwardRef } from 'react'

export const SubPjtBaseInfoFormSchema = z.object({
  subPjtNm: z.string(),
  subPjtDesc: z.string(),
  range: z.object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  }),
  witNum: z.number(),
})

export type ProjectBaseInfo = z.infer<typeof SubPjtBaseInfoFormSchema>

export type SubPjtBaseInfoFormProps = {
  data: SubProjectInfo
}

export const SubPjtBaseInfoForm = forwardRef<
  HTMLFormElement,
  SubPjtBaseInfoFormProps
>(function WrappedSubPjtBaseInfoForm({ data }, ref) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { subPjtMngRId, subPjtUid, ...rest } = data

  const form = useForm<ProjectBaseInfo>({
    defaultValues: {
      ...rest,
      subPjtDesc: data.subPjtDesc ?? '',
      range: {
        from: parse(data.staYmd, 'yyyyMMdd', new Date()),
        to: parse(data.endYmd, 'yyyyMMdd', new Date()),
      },
    },
  })
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)
  const [update] = useUpdateSubProjectPjMutation()
  const { toast } = useToast()

  function onSubmit(e: ProjectBaseInfo) {
    const { range, ...rest } = e
    const staYmd = format(range.from, 'yyyyMMdd')
    const endYmd = format(range.to, 'yyyyMMdd')
    update({
      pjtUid: target?.pjtUid || 6,
      subPjtUid: data.subPjtUid,
      ...rest,
      staYmd: staYmd,
      endYmd: endYmd,
    })
      .unwrap()
      .then(() => {
        toast({
          title: '서브프로젝트 정보가 수정되었습니다.',
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
        className="flex flex-col gap-3.5"
      >
        <FormField
          control={form.control}
          name="subPjtNm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-[60px]">이름</FormLabel>
              <FormControl>
                <Input {...field} className="!mt-0" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subPjtDesc"
          render={({ field }) => (
            <FormItem className="items-baseline">
              <FormLabel className="w-[60px]">소개</FormLabel>
              <FormControl className="mt-0">
                <div className="w-full flex flex-col gap-1.5">
                  <Textarea {...field} className="!mt-0" />
                  <p className="text-sm text-muted-foreground text-right">
                    {field.value.length} / 50
                  </p>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="range"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-[60px]">기간</FormLabel>
              <FormControl className="mt-0">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
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
                          className="mr-2 h-4 w-4"
                        />
                        {field.value?.from && formatDate(field.value?.from)}
                        {field.value?.from && ' - '}
                        {field.value?.to && formatDate(field.value.to)}
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
                            from: range.from
                              ? formatDate(range.from)
                              : undefined,
                            to: range.to ? formatDate(range.to) : undefined,
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
          name="witNum"
          render={({ field }) => (
            <FormItem className="min-h-10">
              <FormLabel className="w-[60px]">가중치</FormLabel>
              <FormControl>
                <div className="w-full flex justify-between items-center gap-2.5 !mt-0">
                  <Progress {...field} className="h-5 " />
                  <p className="text-primary-normal text-xs">{field.value}%</p>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
})

SubPjtBaseInfoForm.displayName = 'SubPjtBaseInfoForm'
