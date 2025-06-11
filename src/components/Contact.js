import palmLeaf from '../pics/palmLeaf.jpg';
import sakura from '../pics/sakura1.jpg';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';

const ContactWrapper = styled.div`
  // background-image: url(${palmLeaf});
  // too dark?
  background-image: url(${sakura});
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

const Fill = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, .4);
  width: 100%;
  height: 60vh;
  padding: 5vw;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 8vw;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  h2 {
    margin-top: 2vw;
  }

  .stack {
    margin-bottom: 2vw;
  }
`;

const StyledSVG = styled.svg`
  position: absolute;
  right: 0;
  height: 100%;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Fill>
        <TitleWrapper>
          <h2>Let's</h2>
          <h2>Connect</h2>
        </TitleWrapper>

        <StyledSVG viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--bb)" d="M44.5,-61.9C57.2,-52.1,66.7,-38.4,69.6,-23.9C72.4,-9.5,68.7,5.8,61.5,17.6C54.3,29.3,43.8,37.6,33,48.3C22.2,59.1,11.1,72.4,-2.9,76.4C-16.9,80.3,-33.7,75,-42.6,63.6C-51.4,52.2,-52.2,34.7,-58.4,18.3C-64.7,2,-76.3,-13.3,-73.8,-24.9C-71.3,-36.6,-54.8,-44.6,-40.1,-53.8C-25.5,-63,-12.7,-73.4,1.6,-75.6C15.9,-77.8,31.8,-71.7,44.5,-61.9Z" transform="translate(100 100)" />
        </StyledSVG>

        <InfoWrapper>
          <h2>Phone</h2>
          <p>(631) 835-7726</p>
          <h2>E-Mail</h2>
          <p>info@wiinksalon.com</p>
          <h2>Address</h2>
          <p>69 Your Mom's House</p>
          <h2>Social</h2>
          <Stack className='stack' direction="row" spacing={.5}>
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
        </InfoWrapper>
      </Fill>
    </ContactWrapper>
  );
};

export default Contact;