import React, {PropsWithChildren} from 'react'
import { BulletsSchema } from './BulletsTypes'
import { useDevice } from 'vtex.device-detector'
import { useListContext } from 'vtex.list-context'


export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const {isMobile} = useDevice()
  const {list} = useListContext() || [] 
  console.log({bullets})
  console.log({list})
  if(false){
    console.log(children);
  }
  return isMobile ? <div>Mobile</div> : <div>Estamos en Desktop</div>
}

export default BulletGroup