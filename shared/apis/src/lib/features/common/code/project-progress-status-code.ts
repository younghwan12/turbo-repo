import { type ComboboxSelectOptionProps } from '@pims-frontend/ui/components/base/shadcn/select'
import { type CodeResDto } from './dto/response/CodeResDto'

const COLOR_MAPPER = {
  '001': 'yellow',
  '002': 'green',
  '003': 'purple',
  '004': 'red',
} as const

export function transformProjectProgressStatusCode(
  codes: CodeResDto[],
): ComboboxSelectOptionProps[] {
  return codes.map(code => ({
    value: code.codeId,
    displayString: code.codeValue,
    type: 'badge_status',
    badgeStatusProps: {
      size: 'lg',
      background: 'default',
      badgestatus: COLOR_MAPPER[code.codeId as keyof typeof COLOR_MAPPER],
    },
  }))
}

export function findSelectOptionsFromValue(
  codes: CodeResDto[],
  value: string,
): ComboboxSelectOptionProps {
  const code = codes.find(code => code.codeId === value)
  return {
    value: code?.codeId || ``,
    displayString: code?.codeValue || ``,
    type: 'badge_status',
    badgeStatusProps: {
      size: 'lg',
      background: 'default',
      badgestatus: COLOR_MAPPER[code?.codeId as keyof typeof COLOR_MAPPER],
    },
  }
}
