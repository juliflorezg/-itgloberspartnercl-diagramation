export type BulletsSchema = Array<Bullet>

export type Bullet = {
  image: string
  bulletTitle?: string
  link?: LinkProps
}

export interface LinkProps {
  url: string
  attributeNoFollow?: boolean
  attributeTitle?: string
  openNewTab?: boolean
  newTab?: boolean
}
