import styled from "styled-components";
import palmLeaf3 from '../pics/palmLeaf3.jpg';
import TitleSpacer from "./shared/TitleSpacer";
import ScrollInWrapperHOC from './shared/ScrollInWrapperHOC';

const AboutWrapper = styled.div`
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${palmLeaf3});
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6vw 0 10vw 0;
`;

const StyledP = styled.p`
  width: 70%;
`;

const About = () => {
  return (
    <AboutWrapper>
      <TitleSpacer info="Behind the Lashes" />
      <ScrollInWrapperHOC Component={StyledP}>
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