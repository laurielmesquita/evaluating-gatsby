import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './style'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 60
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )

  return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} />
}

export default Avatar
