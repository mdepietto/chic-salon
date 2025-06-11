import { images } from '../pics/images';
import TitleSpacer from './shared/TitleSpacer';
import styled from 'styled-components';
import ScrollInWrapperHOC from './shared/ScrollInWrapperHOC';

const GalleryWrapper = styled.div`
  background: var(--aa);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
`;

const StyledImage = styled.img`;
  border-radius: 10px;
  margin: .5vw;
  aspect-ratio: 1/1;
  width: 31%;
  object-fit: cover;
`;

const Gallery = () => {
  return (
    <GalleryWrapper>
      <TitleSpacer info='Community Lashes' />

      <StyledSvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--cc)" d="M44.2,-76.1C52.6,-63.4,51.5,-43.2,48.9,-28.3C46.4,-13.5,42.5,-4,43.3,7.8C44.1,19.7,49.7,33.8,47,45.4C44.2,56.9,33.1,66,19.6,72.7C6.1,79.4,-9.9,83.7,-23.1,79.4C-36.2,75.2,-46.6,62.2,-56.7,49.6C-66.8,37,-76.8,24.7,-77.3,12C-77.8,-0.8,-69,-14.1,-61.1,-26.5C-53.3,-38.9,-46.5,-50.4,-36.5,-62.4C-26.5,-74.3,-13.3,-86.8,2.3,-90.4C17.9,-94,35.8,-88.8,44.2,-76.1Z" transform="translate(100 100)" />
      </StyledSvg>

      <ScrollInWrapperHOC Component={ImagesWrapper}>
        {images.map((image, i) => (
          <StyledImage alt={`mock${i}`} src={image} key={i} />
        ))}
      </ScrollInWrapperHOC>

      <TitleSpacer info="@wiinksalon" />
    </GalleryWrapper>
  );
};

export default Gallery;