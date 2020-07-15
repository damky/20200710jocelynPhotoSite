import React from 'react'
import { config, useSpring } from 'react-spring'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

type PageProps = {
  data: {
    AboutImg: {
      fluid: {
        aspectRatio: number
        src: string
        srcSet: string
        sizes: string
        base64: string
        tracedSVG: string
        srcWebp: string
        srcSetWebp: string
      }
    }
  }
}

const About: React.FunctionComponent<PageProps> = ({ data: { AboutImg } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO
        title="About | Jocelyn McKay"
        desc="Hi. I'm Jocelyn! I am a young professional with experience in senior, group, and baby portraits, engagement and bridal photos, as well as graphic design and landscape photography. I am a proud member of the SLC area community, and I am looking for new challenges. I am an adept empath and have a lot of experience with guiding any personality to feel comfortable and beautiful. My background has allowed me to make a positive contribution to my profession."
      />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Jocelyn!</h1>
        <p>
          I am a young professional with experience in senior, group, and baby portraits, engagement and bridal photos,
          as well as graphic design and landscape photography. I am a proud member of the SLC area community, and I am
          looking for new challenges. I am an adept empath and have a lot of experience with guiding any personality to
          feel comfortable and beautiful. My background has allowed me to make a positive contribution to my profession.
        </p>
        <Img alt="Jocelyn McKay profile" fluid={AboutImg.fluid} />
      </AnimatedBox>
    </Layout>
  )
}

export default About

export const query = graphql`
  query About {
    AboutImg: imageSharp(fluid: { originalName: { eq: "about-joc.jpg" } }) {
      id
      fluid(quality: 95, maxWidth: 1200) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
