import React from 'react'
import { AvatarImg } from './style'

type Props = {
  srcImage: string
  size: string
}
const Avatar: React.FC<Props> = ({ srcImage, size }) => {
  return (
    <div>
      <AvatarImg src={srcImage} width={size} height={size} />
    </div>
  )
}

export default Avatar
