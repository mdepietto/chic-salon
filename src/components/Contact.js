import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import ScrollInWrapperHOC from './shared/ScrollInWrapperHOC';

const ContactWrapper = styled.div`
  background: var(--cc);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  overflow-x: hidden;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h2 {
    margin-top: 2vw;
  }
`;

const StyledSVG1 = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translateX(40vw);
`;

const StyledSVG2 = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translateX(-50vw);
`;

const Contact = () => {
  return (
    <ContactWrapper>
        <StyledSVG1 viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--bb)" d="M44.5,-61.9C57.2,-52.1,66.7,-38.4,69.6,-23.9C72.4,-9.5,68.7,5.8,61.5,17.6C54.3,29.3,43.8,37.6,33,48.3C22.2,59.1,11.1,72.4,-2.9,76.4C-16.9,80.3,-33.7,75,-42.6,63.6C-51.4,52.2,-52.2,34.7,-58.4,18.3C-64.7,2,-76.3,-13.3,-73.8,-24.9C-71.3,-36.6,-54.8,-44.6,-40.1,-53.8C-25.5,-63,-12.7,-73.4,1.6,-75.6C15.9,-77.8,31.8,-71.7,44.5,-61.9Z" transform="translate(100 100)" />
        </StyledSVG1>
        <StyledSVG2 viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--bb)" d="M44.5,-61.9C57.2,-52.1,66.7,-38.4,69.6,-23.9C72.4,-9.5,68.7,5.8,61.5,17.6C54.3,29.3,43.8,37.6,33,48.3C22.2,59.1,11.1,72.4,-2.9,76.4C-16.9,80.3,-33.7,75,-42.6,63.6C-51.4,52.2,-52.2,34.7,-58.4,18.3C-64.7,2,-76.3,-13.3,-73.8,-24.9C-71.3,-36.6,-54.8,-44.6,-40.1,-53.8C-25.5,-63,-12.7,-73.4,1.6,-75.6C15.9,-77.8,31.8,-71.7,44.5,-61.9Z" transform="translate(100 100)" />
        </StyledSVG2>

        <ScrollInWrapperHOC Component={TitleWrapper}>
          <h1>Let's</h1>
          <h1>Connect</h1>
        </ScrollInWrapperHOC>

        <ScrollInWrapperHOC Component={InfoWrapper}>
          <h2>Phone</h2>
          <p>(631) 835-7726</p>
          <h2>E-Mail</h2>
          <p>info@wiinksalon.com</p>
          <h2>Address</h2>
          <p>69 Your Mom's House</p>
          <h2>Social</h2>
          <Stack direction="row" spacing={.5}>
            <IconButton aria-label="Instagram">
              <Instagram fontSize='large' />
            </IconButton>
            <IconButton aria-label="Facebook">
              <Facebook fontSize='large' />
            </IconButton>
            <IconButton aria-label="Pinterest">
              <Pinterest fontSize='large' />
            </IconButton>
          </Stack>
        </ScrollInWrapperHOC>
    </ContactWrapper>
  );
};

export default Contact;