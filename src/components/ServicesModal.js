import { Modal } from '@mui/material';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContentsWrapper = styled.div`
  background-color: var(--theme-brick);
  height: 30vh;
  width: 60vw;
  border-radius: 10px;
  padding: 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 3vw;
  }
`;

const ServiceLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .dots {
    flex: 1;
    border-bottom: 1vw dotted white;
  }
`;

const ServicesModal = ({ isModalOpen, handleCloseModal }) => {
  return (
    <StyledModal open={isModalOpen} onClose={handleCloseModal}>
      <ModalContentsWrapper>
        <h2>Lashes</h2>
        <ServiceLine>
          <p>lift</p>
          <div className="dots" />
          <p>$20</p>
        </ServiceLine>
        <ServiceLine>
          <p>bend</p>
          <div className="dots" />
          <p>$30</p>
        </ServiceLine>
        <ServiceLine>
          <p>snap</p>
          <div className="dots" />
          <p>$40</p>
        </ServiceLine>
      </ModalContentsWrapper>
    </StyledModal>
  )
}

export default ServicesModal;