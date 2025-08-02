import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import ScrollInWrapperHOC from './shared/ScrollInWrapperHOC';
import { screenPixelWidths } from "../data/data";

const ContactWrapper = styled.div`
  background: var(--theme-brick);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  padding: 5vw;
  box-sizing: border-box;

  @media (min-width: ${screenPixelWidths.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1:first-of-type {
    margin-bottom: -15vw;
  }

  @media (min-width: ${screenPixelWidths.tablet}) {
    h1:first-of-type {
      margin-bottom: -8vw;
    }
  }

  @media (min-width: ${screenPixelWidths.laptop}) {
    h1:first-of-type {
      margin-bottom: -5vw;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (min-width: ${screenPixelWidths.tablet}) {
    margin-top: 0;
  }
`;

const StyledSVG = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const iconStyles = {
  height: '7vw',
  width: '7vw',

  [`@media (min-width: ${screenPixelWidths.tablet})`]: {
    height: '5vw',
    width: '5vw',
  },
  [`@media (min-width: ${screenPixelWidths.tabletL})`]: {
    height: '4.5vw',
    width: '4.5vw',
  },
  [`@media (min-width: ${screenPixelWidths.laptop})`]: {
    height: '4vw',
    width: '4vw',
  },
}

const Contact = () => (
  <ContactWrapper>
      <StyledSVG viewBox="-120 20 130 60" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--theme-pink)" d="M44.5,-61.9C57.2,-52.1,66.7,-38.4,69.6,-23.9C72.4,-9.5,68.7,5.8,61.5,17.6C54.3,29.3,43.8,37.6,33,48.3C22.2,59.1,11.1,72.4,-2.9,76.4C-16.9,80.3,-33.7,75,-42.6,63.6C-51.4,52.2,-52.2,34.7,-58.4,18.3C-64.7,2,-76.3,-13.3,-73.8,-24.9C-71.3,-36.6,-54.8,-44.6,-40.1,-53.8C-25.5,-63,-12.7,-73.4,1.6,-75.6C15.9,-77.8,31.8,-71.7,44.5,-61.9Z" />
      </StyledSVG>
      <StyledSVG viewBox="0 -80 130 50" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--theme-pink)" d="M44.5,-61.9C57.2,-52.1,66.7,-38.4,69.6,-23.9C72.4,-9.5,68.7,5.8,61.5,17.6C54.3,29.3,43.8,37.6,33,48.3C22.2,59.1,11.1,72.4,-2.9,76.4C-16.9,80.3,-33.7,75,-42.6,63.6C-51.4,52.2,-52.2,34.7,-58.4,18.3C-64.7,2,-76.3,-13.3,-73.8,-24.9C-71.3,-36.6,-54.8,-44.6,-40.1,-53.8C-25.5,-63,-12.7,-73.4,1.6,-75.6C15.9,-77.8,31.8,-71.7,44.5,-61.9Z" />
      </StyledSVG>

      <ScrollInWrapperHOC Component={TitleWrapper}>
        <h1>Let's</h1>
        <h1>Connect</h1>
      </ScrollInWrapperHOC>

      <ScrollInWrapperHOC Component={InfoWrapper}>
        <h3>Phone</h3>
        <p>(xxx) xxx-xxxx</p>
        <h3>E-Mail</h3>
        <p>info@chicsalon.com</p>
        <h3>Address</h3>
        <p>882 Sasquahana Blvd.</p>
        <p>New York, NY </p>
        <h3>Social</h3>
        <Stack direction="row" spacing={.5}>
          <IconButton aria-label="Instagram">
            <Instagram sx={iconStyles} />
          </IconButton>
          <IconButton aria-label="Facebook">
            <Facebook sx={iconStyles} />
          </IconButton>
          <IconButton aria-label="Pinterest">
            <Pinterest sx={iconStyles} />
          </IconButton>
        </Stack>
      </ScrollInWrapperHOC>
  </ContactWrapper>
);

export default Contact;