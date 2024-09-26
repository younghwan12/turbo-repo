import {
  RadixTabs,
  RadixTabsList,
  RadixTabsTrigger,
} from '@pims-frontend/ui/components/base/shadcn/tabs'

import { ProjectInfoTab } from './project-info-tab'
import { SubPjtInfoTab } from './sub-pjt-info-tab'

export const ProjectTabs = () => {
  return (
    <RadixTabs defaultValue="pjt-info" className="gap-10">
      <RadixTabsList className="flex justify-start gap-2 bg-transparent">
        <RadixTabsTrigger value="pjt-info" variant={'bottomActive'}>
          프로젝트 정보
        </RadixTabsTrigger>
        <RadixTabsTrigger value="sub-pjt" variant={'bottomActive'}>
          서브프로젝트
        </RadixTabsTrigger>
      </RadixTabsList>
      <div>
        <ProjectInfoTab />
        <SubPjtInfoTab />
      </div>
    </RadixTabs>
  )
}
