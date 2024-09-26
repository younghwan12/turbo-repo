// components/TreeGridComponent.tsx
import React from 'react'

interface TreeGridComponentProps {
  uuid: string
  ysize: number
}

const CommonTable: React.FC<TreeGridComponentProps> = ({ uuid, ysize }) => {
  return <div id={uuid} className={`h-[${ysize}]`}></div>
}

export default CommonTable

// const CommonTable = React.forwardRef<HTMLButtonElement, TreeGridComponentProps>(
//   ({ uuid, ysize }) => {
//     return <div id={uuid} className={`h-[${ysize}]`}></div>
//   },
// )
// CommonTable.displayName = 'CommonTable'

// export { CommonTable }
