import styled from 'styled-components';
import Header from '../Header';
import Progressbar from '../../common/Progressbar';
import { useState } from 'react';

const buttonData = [
  { kind: '강아지', img: '/img/dog.png', alt: '강아지' },
  { kind: '고양이', img: '/img/cat.png', alt: '고양이' },
  { kind: '그외', img: '/img/rabbit.png', alt: '그 외' },
];

export default function PetKind({ petData, setPetData, onNext }) {
  const [selectedKind, setSelectedKind] = useState(petData.kind || '');

  const handleKindSelect = (kind) => {
    setSelectedKind(kind);
  };

  const handleNextClick = () => {
    setPetData((prevData) => ({
      ...prevData,
      kind: selectedKind,
    }));
    onNext();
  };

  return (
    <>
      <Header />
      <Progressbar number={1} />
      <TextArea>
        <span>어느 날 눈 앞에 동물이 나에게 달려온다!</span>
        <span>이 동물은 무엇일까?</span>
      </TextArea>
      <ButtonBox>
        {buttonData.map((button) => (
          <button
            key={button.kind}
            onClick={() => handleKindSelect(button.kind)}
            className={selectedKind === button.kind ? 'active' : ''}
          >
            <img src={button.img} alt={button.alt} />
            {button.kind}
          </button>
        ))}
      </ButtonBox>
      <NextButtonWrapper>
        <NextButtonStyled onClick={handleNextClick} disabled={!selectedKind}>
          다음
          <img src="/img/Dog print.png" alt="다음" />
        </NextButtonStyled>
      </NextButtonWrapper>
    </>
  );
}

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.black};
  padding-top: 5rem;
  gap: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 4rem;

  button {
    width: 10rem;
    height: 10rem;
    border: 2px solid #e5e5e5;
    border-radius: 1rem;
    background-color: inherit;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'NanumSquareNeoBold';
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.color.black};
    &.active {
      border-color: ${({ theme }) => theme.color.skyblue};
      box-shadow: 0 0 10px rgba(71, 178, 255, 0.7);
    }
  }

  img {
    margin-bottom: 1rem;
    width: 6rem;
    height: 6rem;
    object-fit: contain;
  }
`;

const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const NextButtonStyled = styled.button`
  width: 15rem;
  height: 3.4rem;
  margin-top: 2rem;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.xl};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.grey : theme.color.skyblue};
  color: ${({ theme }) => theme.color.white};
  border-radius: 1.7rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;
