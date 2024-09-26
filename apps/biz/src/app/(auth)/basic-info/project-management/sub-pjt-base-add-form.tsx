'use client'

import { useCreateSubProjectPjMutation } from '@pims-frontend/apis/lib/features/pms/project/controller/ProjectController'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
import { format } from '@pims-frontend/ui/components/base/shadcn/date-fns'
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
// TODO: 경로 확인
import type { DateRange } from '@pims-frontend/ui/lib/react-day-picker/index'
import { useForm } from '@pims-frontend/ui/lib/react-hook-form/index'
import { cn } from '@pims-frontend/ui/lib/utils'
import { z } from '@pims-frontend/ui/lib/zod/index'
import { forwardRef } from 'react'

export const SubPjtBaseAddFormSchema = z.object({
  subPjtNm: z.string(),
  range: z.object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  }),
})

export type ProjectBaseAddInfo = z.infer<typeof SubPjtBaseAddFormSchema>

export type SubPjtBaseAddFormProps = {
  defaultValues?: Partial<ProjectBaseAddInfo> | null
}

export const SubPjtBaseAddForm = forwardRef<
  HTMLFormElement,
  SubPjtBaseAddFormProps
>(function WrappedSubPjtBaseAddForm(props, ref) {
  const form = useForm<ProjectBaseAddInfo>({
    defaultValues: {},
  })

  const { toast } = useToast()
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)
  const [create] = useCreateSubProjectPjMutation()

  function onSubmit(data: ProjectBaseAddInfo) {
    const { range, ...rest } = data

    const staYmd = format(range.from, 'yyyyMMdd')
    const endYmd = format(range.to, 'yyyyMMdd')
    create({
      pjtUid: target?.pjtUid || 6,
      ...rest,
      staYmd: staYmd,
      endYmd: endYmd,
    })
      .unwrap()
      .then(() => {
        toast({
          title: '서브프로젝트가 생성되었습니다.',
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
        className="flex flex-col gap-6 px-9 py-4 min-h-[370px]"
      >
        <FormField
          control={form.control}
          name="subPjtNm"
          render={({ field }) => (
            <FormItem className="flex-col gap-1.5 items-start">
              <FormLabel>서브프로젝트명</FormLabel>
              <FormControl>
                <Input {...field} className="!mt-0" />
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
                      {field.value?.from && formatDate(field.value?.from)}
                      {field.value?.from && ' - '}
                      {field.value?.to && formatDate(field.value.to)}
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
      </form>
    </Form>
  )
})

SubPjtBaseAddForm.displayName = 'SubPjtBaseAddForm'
