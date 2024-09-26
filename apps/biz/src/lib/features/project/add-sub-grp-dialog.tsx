'use client'

import { SubGrpAddGrid } from '@pims-frontend/biz/app/(auth)/basic-info/project-management/grid/sub-grp-add-grid'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@pims-frontend/ui/components/base/shadcn/dialog'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { basicInfoActions, basicInfoSelectors } from './basicInfoSlice'

const AddSubGrpDialog = () => {
  const dispatch = useAppDispatch()
  const { isSubGrpDialogOpen } = useAppSelector(basicInfoSelectors.selectState)

  // const { data: subPjtList } = useGetSubprojectsPjQuery({
  //   pjtUid: target?.pjtUid ?? 6,
  // })

  //const [tableData] = useState(subPjtList || [])

  // const handleDataChange = (newData: typeof tableData) => {
  //   //setTableData(newData);
  // }

  return (
    <Dialog
      open={isSubGrpDialogOpen}
      onOpenChange={() => {
        dispatch(basicInfoActions.closeSubGrpDialog())
      }}
    >
      <DialogContent className=" p-0 gap-0">
        <DialogHeader className="p-6 gap-1.5">
          <DialogTitle>서브그룹 추가</DialogTitle>
          <DialogDescription className="!mt-0">
            서브그룹을 추가하여 서브프로젝트를 배정합니다
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col px-6 gap-6 pb-8">
          <SubGrpAddGrid
            data={[]}
            //onDataChange={handleDataChange}
          />
        </div>
        <DialogFooter className="justify-between pt-3 px-6 pb-6">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              닫기
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant={'default'}
            onClick={() => {
              dispatch(basicInfoActions.closeSubPjtDialog())
            }}
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default AddSubGrpDialog
