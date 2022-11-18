import React from 'react'
// import { Link, useRuntime } from 'vtex.render-runtime'
import { Link } from 'vtex.render-runtime'
import { LinkProps } from './BulletsTypes'
// import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import "./styles.css"

type Props = {
  src: string
  bulletTitle?: string
  link: LinkProps
}

export const Bullet = ({ src, bulletTitle, link }: Props) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)
  console.log("Datos para mi bullet", src, bulletTitle, link);
  console.log(handles)
  return (
    <div className={handles.bullet__item}>
      <Link to={link.url} className = {handles["bullet__item--link"]}>
        <img className={`${handles["bullet__item--image"]} externalClass`} src={src} alt={bulletTitle} />
        <p className={handles["bullet__item--title"]} >{bulletTitle}</p>
      </Link>
    </div>
    )
}

Bullet.schema = {
  title: "bullet",
  type: "object",
  properties: {
    src: {
      title: "imagen de bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}


// export const Bullet = ({bulletTitle, key}: {bulletTitle: string | undefined, key: number}) =>{
//   const runtime = useRuntime()
//   console.log(runtime)
//   return<div>hola, soy un bullet jejeje {bulletTitle}{key}</div>
// }

