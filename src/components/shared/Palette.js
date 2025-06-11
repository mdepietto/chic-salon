import styled from 'styled-components';

const PaletteWrapper = styled.div`
  position: fixed;
  top: 30%;
  z-index: 2;
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ color }) => color};
`;

const Palette = () => {
  return (
    <PaletteWrapper>
      <Box color='var(--aa)' />
      <Box color='var(--bb)' />
      <Box color='var(--cc)' />
      <Box color='var(--dd)' />
      <Box color='var(--ee)' />
      <Box color='var(--ff)' />
      <Box color='var(--gg)' />
    </PaletteWrapper>
  );
};

export default Palette;