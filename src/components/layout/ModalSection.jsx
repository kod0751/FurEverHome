import styled from 'styled-components';

const ModalArea = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .modalCon {
    position: absolute;
    background-color: #f8f9fa;
    width: 30rem;
    height: 30rem;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    width: 100%;
    height: 2rem;
    cursor: pointer;
    background-color: inherit;
    border: none;
    display: flex;
    justify-content: end;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0 1rem;
  gap: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.color.md};
    font-family: 'NanumSquareNeo';
  }

  .first {
    font-size: ${({ theme }) => theme.color.lg};
    font-family: 'NanumSquareNeoExtraBold';
  }
`;

export default function ModalSection({ onClose }) {
  return (
    <ModalArea>
      <div className="modalCon">
        <button onClick={onClose}>
          <box-icon name="x" color="#7F7F7F"></box-icon>
        </button>
        <InfoBox>
          <span className="first">첫 번째 문제는</span>
          <span>품종에 대한 문제입니다.</span>
        </InfoBox>
        <InfoBox>
          <span className="first">두 번째 문제는</span>
          <span>성별에 대한 문제입니다.</span>
        </InfoBox>
        <InfoBox>
          <span className="first">세 번째 문제는</span>
          <span>몸무게에 대한 문제입니다.</span>
        </InfoBox>
        <InfoBox>
          <span className="first">네 번째 문제는</span>
          <span>색상에 대한 문제입니다.</span>
        </InfoBox>
      </div>
    </ModalArea>
  );
}
