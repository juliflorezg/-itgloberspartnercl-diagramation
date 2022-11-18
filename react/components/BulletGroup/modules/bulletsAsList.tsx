import React from 'react'
// import { BulletsSchema, Bullet } from "../BulletsTypes"
import { BulletsSchema } from "../BulletsTypes"
// import { Link } from  "vtex.render-runtime"
import { Bullet } from "../Bullet"

export const getBulletAsTSXList = (
  bullets: BulletsSchema
) => {
  // return <div></div>
  // return bullets.map((bullet: Bullet, index) => (
    // <div key={index}>
    //   <a href={bullet?.link?.url ? bullet?.link?.url : ""}>
    //     <p>{bullet?.bulletTitle}</p>
    //     <p>{bullet?.image}</p>
    //   </a>
    // </div>)

    // * return bullets.map((bullet: any, index) => (
    return bullets.map((bullet, index) => (
    <Bullet
      key={index}
      src={bullet.image}
      bulletTitle = {bullet.bulletTitle}
      link={
        bullet.link
        ? bullet.link
        : {
          url: "",
          attributeNoFollow: false,
          attributeTitle: "",
          openNewTab: false,
          newTab: false
        }
      }
    />
  ))
}
