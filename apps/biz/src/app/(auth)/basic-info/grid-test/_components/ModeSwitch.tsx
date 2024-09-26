import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import {
  testActions,
  testSelectors,
} from '@pims-frontend/biz/lib/features/test/testSlice'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'

const ModeSwitch = () => {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector(testSelectors.state)

  if (mode === 'view') {
    return (
      <Button
        onClick={() => {
          dispatch(testActions.changeMode('edit'))
        }}
      >
        <ParameterizedIcon name="FilePenLine" />
        계획하기
      </Button>
    )
  }

  if (mode === 'edit') {
    return (
      <Button
        onClick={() => {
          // TODO: save logic
          dispatch(testActions.changeMode('view'))
        }}
      >
        <ParameterizedIcon name="Save" />
        저장하기
      </Button>
    )
  }
}

export default ModeSwitch
