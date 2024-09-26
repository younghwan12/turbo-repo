import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { BadgeForFilter } from '@pims-frontend/ui/components/base/shadcn/badge'

import { scheduleActions, scheduleSelectors } from '../scheduleSlice'

export type EditingSubprojectBadgesProps = {
  allText?: string
}

const EditingSubprojectBadges = ({
  allText = '전체',
}: EditingSubprojectBadgesProps) => {
  const { strippedSubprojects, isAllSelected: isAllSubprojectsSelected } =
    useAppSelector(scheduleSelectors.selectEditingFilterSubProjects)
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
                scheduleActions.onUncheckedSubproject({
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

export default EditingSubprojectBadges
