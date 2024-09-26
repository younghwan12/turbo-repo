import BizAddSkUserSubprojectGrid from '../../../grid/biz-add-sk-user-subproject-grid/biz-add-sk-user-subproject-grid'
import SearchInput from '../search-Input'

type SubprojectDetail = {
  usrId: string
  usrNikNm: string
  rolCd: string
}

type SubProjectListState = {
  subPjtUid: number
  subPjtNm: string
  subPjtDesc: string
  staYmd: string
  endYmd: string
  witNum: string
  subPjtMngRId: SubprojectDetail[]
}

export const BizAddSkUser = () => {
  // TODO 데이터 연동
  const projectList: SubProjectListState[] = [
    {
      subPjtUid: 0,
      subPjtNm: '송성희',
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
      subPjtNm: '송성희',
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
      subPjtNm: '송성희',
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
    //console.log('선택된 항목:', item)
    if (item) return
  }

  return (
    <div className="px-5 my-10">
      <SearchInput
        items={projectList}
        placeholder="SK직원 검색"
        displayKey="subPjtNm"
        onItemSelected={handleItemSelect}
      />
      <div className="w-full">
        <BizAddSkUserSubprojectGrid />
      </div>
    </div>
  )
}
