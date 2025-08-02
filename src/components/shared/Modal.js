import { Modal as MuiModal } from '@mui/material';
import styled from 'styled-components';
import { screenPixelWidths } from '../../data/data';

const StyledModal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContentsWrapper = styled.div`
  background-color: var(--theme-brick);
  width: ${({ modaltype }) => modaltype === 'Services' && '60vw'};
  max-width: 80vw;
  max-height: 90vh;
  border-radius: var(--border-radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: ${screenPixelWidths.tablet}) {
    width: min(50vw, 450px);
  }

  @media (min-width: ${screenPixelWidths.tabletL}) {
    width: min(40vw, 450px);
  }

  @media (min-width: ${screenPixelWidths.laptop}) {
    width: min(35vw, 566px);
  }
`;

const Modal = ({ isModalOpen, handleCloseModal, Component }) =>
  <StyledModal open={isModalOpen} onClose={handleCloseModal}>
    <ModalContentsWrapper modaltype={Component.name}>
      <Component onClose={handleCloseModal} />
    </ModalContentsWrapper>
  </StyledModal>

export default Modal;