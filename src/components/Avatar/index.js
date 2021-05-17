import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as S from './style'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src='../../images/profile-photo.jpg'
        alt='John Doe Avatar'
        placeholder='blurred'
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
