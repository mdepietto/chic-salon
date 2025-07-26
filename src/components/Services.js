import styled from 'styled-components';
import { screenPixelWidths } from '../data/data';

const ServiceLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .dots {
    flex: 1;
    border-bottom: 1vw dotted white;
  }

  @media (min-width: ${screenPixelWidths.tablet}) {
    .dots {
      border-bottom: .7vw dotted white;
    }
  }

  @media (min-width: ${screenPixelWidths.laptop}) {
    .dots {
      border-bottom: .5vw dotted white;
    }
  }
`;

const Services = () => {
  return (
    <div>
      <h3>Hair</h3>
      <ServiceLine>
        <p>haircut</p>
        <div className="dots" />
        <p>95</p>
      </ServiceLine>
      <ServiceLine>
        <p>bang trim</p>
        <div className="dots" />
        <p>30</p>
      </ServiceLine>
      <ServiceLine>
        <p>blowout</p>
        <div className="dots" />
        <p>50</p>
      </ServiceLine>
      <ServiceLine>
        <p>custom toning</p>
        <div className="dots" />
        <p>125</p>
      </ServiceLine>

      <h3>Lashes</h3>
      <ServiceLine>
        <p>full set</p>
        <div className="dots" />
        <p>150</p>
      </ServiceLine>
      <ServiceLine>
        <p>refill</p>
        <div className="dots" />
        <p>100</p>
      </ServiceLine>
      <ServiceLine>
        <p>touch up</p>
        <div className="dots" />
        <p>70</p>
      </ServiceLine>
      <ServiceLine>
        <p>removal</p>
        <div className="dots" />
        <p>35</p>
      </ServiceLine>
    </div>
  )
}

export default Services;