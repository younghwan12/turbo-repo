import { addUserModalSelector } from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'

import { BizAddUserSubprojectGridSheet } from '../../../grid/biz-add-user-subproject-grid/biz-add-user-subproject-grid-sheet'
import SearchInput from '../search-Input'

type SubprojectDetail = {
  usrId: string
  usrNikNm: string
  rolCd: string
}

export type SubProjectListState = {
  subPjtUid: number
  subPjtNm: string
  subPjtDesc: string
  staYmd: string
  endYmd: string
  witNum: string
  subPjtMngRId: SubprojectDetail[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BizAddUserSubProject = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userType } = useAppSelector(addUserModalSelector.selectAddModalState)
  useAppDispatch()
  const projectList: SubProjectListState[] = [
    {
      subPjtUid: 0,
      subPjtNm: '서브프로젝트a',
      subPjtDesc: 'sk',
      staYmd: '20220111',
      endYmd: '20220211',
      witNum: '20220211',
      subPjtMngRId: [
        { usrId: 'id-1', usrNikNm: '서브프로젝트1', rolCd: 'member' },
        { usrId: 'id-2', usrNikNm: '서브프로젝트2', rolCd: 'system' },
        { usrId: 'id-3', usrNikNm: '서브프로젝트3', rolCd: 'admin' },
      ],
    },
    {
      subPjtUid: 1,
      subPjtNm: '서브프로젝트b',
      subPjtDesc: 'sk',
      staYmd: '20220111',
      endYmd: '20220211',
      witNum: '20220211',
      subPjtMngRId: [
        { usrId: 'id-1', usrNikNm: '서브프로젝트1', rolCd: 'member' },
        { usrId: 'id-2', usrNikNm: '서브프로젝트2', rolCd: 'system' },
        { usrId: 'id-3', usrNikNm: '서브프로젝트3', rolCd: 'admin' },
      ],
    },
    {
      subPjtUid: 2,
      subPjtNm: '서브프로젝트c',
      subPjtDesc: 'sk',
      staYmd: '20220111',
      endYmd: '20220211',
      witNum: '20220211',
      subPjtMngRId: [
        { usrId: 'id-1', usrNikNm: '서브프로젝트1', rolCd: 'member' },
        { usrId: 'id-2', usrNikNm: '서브프로젝트2', rolCd: 'system' },
        { usrId: 'id-3', usrNikNm: '서브프로젝트3', rolCd: 'admin' },
      ],
    },
  ]

  const handleItemSelect = (item: SubProjectListState) => {
    // console.log('선택된 항목:', item)
    if (item) return
  }

  return (
    <div className="space-y-5 px-5 my-10">
      <SearchInput
        items={projectList}
        placeholder="프로젝트 검색"
        displayKey="subPjtNm"
        onItemSelected={handleItemSelect}
      />
      <div>
        <BizAddUserSubprojectGridSheet />
      </div>
    </div>
  )
}

export default BizAddUserSubProject
