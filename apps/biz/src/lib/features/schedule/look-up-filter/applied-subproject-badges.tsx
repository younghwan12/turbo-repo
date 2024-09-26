import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { BadgeForFilter } from '@pims-frontend/ui/components/base/shadcn/badge'

import { scheduleActions, scheduleSelectors } from '../scheduleSlice'

export type AppliedSubprojectBadgesProps = {
  allText?: string
}

const AppliedSubprojectBadges = ({
  allText = '전체',
}: AppliedSubprojectBadgesProps) => {
  const { strippedSubprojects, isAllSelected: isAllSubprojectsSelected } =
    useAppSelector(scheduleSelectors.selectAppliedFilterSubProjects)
  const dispatch = useAppDispatch()

  return (
    <>
      {isAllSubprojectsSelected && <BadgeForFilter>{allText}</BadgeForFilter>}
      {strippedSubprojects.length > 0 &&
        !isAllSubprojectsSelected &&
        strippedSubprojects.map(subproject => (
          <BadgeForFilter
            key={subproject.value}
            onClick={e => {
              e.stopPropagation()
              e.preventDefault()
              dispatch(
                scheduleActions.onUncheckedSubprojectFromApplied({
                  value: subproject.value,
                }),
              )
            }}
          >
            {`${subproject.label}   X`}
          </BadgeForFilter>
        ))}
    </>
  )
}

export default AppliedSubprojectBadges
