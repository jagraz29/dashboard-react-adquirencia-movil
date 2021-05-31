import React from 'react'
import { AvatarImg } from './style'

type Props = {
  srcImage: string
}
const Avatar: React.FC<Props> = ({ srcImage }) => {
  return (
    <div>
      <AvatarImg src={srcImage} />
    </div>
  )
}

export default Avatar
