'use client'

import {
  Combobox,
  ComboboxProps,
} from '@pims-frontend/ui/components/base/shadcn/select'
import { useGetAllCodeDetailsQuery } from './controller/CodeController'
import { transformProjectProgressStatusCode } from './project-progress-status-code'

export function ProjectProgressStatusCodeCombobox(
  props: Omit<ComboboxProps, 'selectOptions'>,
) {
  const { selectOptions, isLoading, refetch } = useGetAllCodeDetailsQuery(
    {
      codeGroupId: 'PJT_PGS_STAT_CD',
    },
    {
      selectFromResult: ({ data = [], isLoading }) => ({
        selectOptions: transformProjectProgressStatusCode(data),
        isLoading,
      }),
    },
  )

  return (
    <Combobox
      {...props}
      onOpenChange={open => {
        if (open) {
          refetch()
        }
        props.onOpenChange?.(open)
      }}
      isLoading={isLoading}
      selectOptions={selectOptions}
    />
  )
}
