import { useAddProjectUserMutation } from '@pims-frontend/apis/lib/features/pms/projectUser/controller/ProjectUserController'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { addUserModalSelector } from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from '@pims-frontend/ui/components/base/shadcn/dialog'
import { Form } from '@pims-frontend/ui/components/base/shadcn/form'
import { useForm } from '@pims-frontend/ui/lib/react-hook-form/index'
import { z } from '@pims-frontend/ui/lib/zod/index'

import { RenderButtons } from '../render-content/buttonRenderers'
import { RenderStepContent } from '../render-content/stepRenderers'

const userMgtAddSchema = z.object({
  usrTyp: z.string(),
  usrNm: z.string(),
  usrId: z.string(),
  usrNik: z.string(),
  // copCd: z.string(),
  // orzCd: z.string(),
  rolCd: z.string().array(),
  subPjtUid: z.string().array(),
})

export type BizAddUserInfo = z.infer<typeof userMgtAddSchema>
const BizAddUserDialog = () => {
  const { isOpen, step, userType } = useAppSelector(
    addUserModalSelector.selectAddModalState,
  )
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)
  const [addProjectUser] = useAddProjectUserMutation()
  useAppDispatch()
  const form = useForm<BizAddUserInfo>({
    defaultValues: {
      usrTyp: '',
      usrNm: '',
      usrId: '',
      usrNik: '',
      // copCd: '',
      // orzCd: '',
      rolCd: [],
      subPjtUid: [],
    },
  })

  const onSubmit = (data: BizAddUserInfo) => {
    if (target) {
      const pjtUid = target?.pjtUid
      const userData = { ...data, pjtUid }
      addProjectUser(userData)
    }
  }
  return (
    <Dialog
      open={isOpen}
      // onOpenChange={open => {
      //   dispatch(addActions.closeAddUserModal())
      // }}
    >
      <DialogContent className="w-auto min-w-[500px] max-w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {RenderStepContent(step, userType, form)}
            <DialogFooter>{RenderButtons(step, userType, form)}</DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default BizAddUserDialog
