import Card from '../common/Card';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 2rem;
  position: relative;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 710px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0rem auto 2rem auto;
    width: auto;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    margin: 0rem auto 2rem auto;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    width: auto;
    gap: 2rem;
  }
`;

export default function PetlistSection({ data }) {
  return (
    <Container>
      {data.map((value, index) => (
        <Card key={index} data={value}></Card>
      ))}
    </Container>
  );
}
