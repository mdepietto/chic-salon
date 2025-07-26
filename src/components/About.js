import styled from "styled-components";
import sakura from '../pics/sakura1.jpg';
import TitleSpacer from "./shared/TitleSpacer";
import ScrollInWrapperHOC from './shared/ScrollInWrapperHOC';
import { screenPixelWidths } from "../data/data";

const AboutWrapper = styled.div`
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${sakura});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10%;
  
  @media (min-width: ${screenPixelWidths.tablet}) {
    padding: 3% 8%;
  }

  @media (min-width: ${screenPixelWidths.tabletL}) {
    padding: 3% 18%;
  }

  @media (min-width: ${screenPixelWidths.laptop}) {
    padding: 3% 25%;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <TitleSpacer info="Behind the Lashes" />
      <ScrollInWrapperHOC Component='p'>
        At WIINK, we believe beauty is in the details — 
        and nothing makes a statement quite like perfectly styled lashes. 
        Located in the heart of Port Jeff, our salon specializes in 
        high-quality lash extensions, lifts, and brow services tailored 
        to enhance your natural features. Whether you’re preparing for a 
        special occasion or looking to simplify your daily routine, our licensed 
        lash artists are dedicated to creating a look that fits your unique style. 
        With a focus on comfort, precision, and care, we're your go-to 
        destination for effortless beauty and lasting confidence.
      </ScrollInWrapperHOC>
    </AboutWrapper>
  );
};

export default About;