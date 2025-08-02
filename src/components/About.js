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
        Located in the heart of Hell’s Kitchen, NYC, Chic
        is a modern beauty destination where style meets precision.
        We specialize in high-end hair services and luxurious lash
        enhancements, offering a personalized experience that brings
        out the best in every client. Our team of expert stylists
        and lash artists are passionate about their craft, staying
        on the cutting edge of trends, techniques, and treatments.
        Whether you're here for a fresh cut and color, a full glam
        lash set, or a subtle enhancement, we’re dedicated to
        helping you look and feel your best. At Chic,
        beauty is more than skin deep — it’s about confidence,
        care, and creating a space where you feel seen, heard,
        and fabulous. Step into our welcoming studio and leave
        feeling empowered.
      </ScrollInWrapperHOC>
    </AboutWrapper>
  );
};

export default About;