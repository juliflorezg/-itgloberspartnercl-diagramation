import React from 'react'
import { BulletsSchema } from './BulletsTypes'
import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { getBulletAsTSXList } from './modules/bulletsAsList'


export interface BulletGroupProps {
  bullets: BulletsSchema
}

// const BulletGroup = ({
//   bullets,
//   children
// }: PropsWithChildren<BulletGroupProps>) => {
const BulletGroup : React.FC<BulletGroupProps> = ({
  bullets, children
}) => {
  const {isMobile} = useDevice()
  const {list} = useListContext() || []
  const list2 = useListContext()
  console.log({bullets})
  console.log({list})
  console.log(list2)

  const bulletsContent = getBulletAsTSXList(bullets)
  const newListContextValue = list.concat(bulletsContent)
  if(false){
    console.log(children);
  }
  // list gets a context value
  return (
  <ListContextProvider list={newListContextValue}>
    {
      isMobile
      ?
      <div>{bulletsContent}</div>
      :
      // children is going to be the slider that we pass on store theme
      children
    }
  </ListContextProvider>
  )
}

export default BulletGroup
