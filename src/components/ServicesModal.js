import { Modal } from '@mui/material';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContentsWrapper = styled.div`
  background-color: var(--cc);
  height: 40vh;
  width: 60vw;
  border-radius: 10px;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ServiceLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .dots {
    flex: 1;
    border-bottom: .5vw dotted white;
  }
`;

const ServicesModal = ({ isModalOpen, handleCloseModal }) => {
  return (
    <StyledModal open={isModalOpen} onClose={handleCloseModal}>
      <ModalContentsWrapper>
        <h3>lashes</h3>
        <ServiceLine>
          <p className="label">lift</p>
          <div className="dots" />
          <p className="price">$20</p>
        </ServiceLine>
        <ServiceLine>
          <p className="label">bend</p>
          <div className="dots" />
          <p className="price">$30</p>
        </ServiceLine>
        <ServiceLine>
          <p className="label">snap</p>
          <div className="dots" />
          <p className="price">$40</p>
        </ServiceLine>
      </ModalContentsWrapper>
    </StyledModal>
  )
}

export default ServicesModal;