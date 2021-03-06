import * as React from "react"
import { graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <HeroSection
img={data.img.childImageSharp.fluid}
  title="About LearnToCode"
  subtitle=""
  heroClass="about-background"
  />
   <DualInfoBlock 
   imgLink="https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=6&m=1075599562&s=612x612&w=0&h=GGYUzdB_T4zA5N9eroCHkW7NgWYj117Tg8zKi1_UE4A="
   heading="Message from CEO" 
   />
   <InfoBlock heading="About Vision" />
   <TeamPhotoSection/>
  
  </Layout>
  
)

export const query=graphql`
{
  img:file(relativePath:{eq:"about.png"}) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
}
`

export default AboutPage
