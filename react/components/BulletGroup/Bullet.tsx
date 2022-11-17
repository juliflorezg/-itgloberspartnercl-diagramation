import React from 'react'
// import { Link, useRuntime } from 'vtex.render-runtime'
import {LinkProps} from './BulletsTypes'
// import { useRuntime } from 'vtex.render-runtime'
// import {useCssHandles} from 'vtex.css-handles'

type Props = {
  src: string
  bulletTitle?: string
  link: LinkProps
}

export const Bullet = ({src, bulletTitle, link}: Props) => {
  console.log("Datos para mi bullet", src, bulletTitle, link);
  return (
    <div>Mi propio bullet</div>
  )
}


// export const Bullet = ({bulletTitle, key}: {bulletTitle: string | undefined, key: number}) =>{
//   const runtime = useRuntime()
//   console.log(runtime)
//   return<div>hola, soy un bullet jejeje {bulletTitle}{key}</div>
// }

