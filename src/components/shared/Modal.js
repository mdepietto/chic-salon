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
  width: ${({ modalType }) => modalType === 'Services' && '60vw'};
  border-radius: 10px;
  padding: 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h2 {
    margin-bottom: 3vw;
  }

  @media (min-width: ${screenPixelWidths.tablet}) {
    width: 50vw;
  }

  @media (min-width: ${screenPixelWidths.tabletL}) {
    width: 40vw;
  }

  @media (min-width: ${screenPixelWidths.laptop}) {
    width: 30vw;
    padding: 4vw;
  }
`;

const Modal = ({ isModalOpen, handleCloseModal, Component }) =>
  <StyledModal open={isModalOpen} onClose={handleCloseModal}>
    <ModalContentsWrapper modalType={Component.name}>
      <Component onClose={handleCloseModal}/>
    </ModalContentsWrapper>
  </StyledModal>

export default Modal;