import styled from 'styled-components';
import Header from '../Header';
import Progressbar from '../../common/Progressbar';
import { useState } from 'react';

const buttonData = [
  { gender: '남아', img: '/img/gold.png', label: '빛나는 황금', alt: '황금' },
  {
    gender: '여아',
    img: '/img/diamond.png',
    label: '화려한 보석',
    alt: '보석',
  },
];

export default function PetGender({ petData, setPetData, onNext }) {
  const [selectedGender, setSelectedGender] = useState(petData.gender || '');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNextClick = () => {
    setPetData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));

    onNext();
  };

  return (
    <>
      <Header />
      <Progressbar number={2} />
      <TextArea>
        <span>백만장자에게 금고를 선물 받았다.</span>
        <span>금고 안에 어떤게 한가득 쌓여 있을까?</span>
      </TextArea>
      <ButtonBox>
        {buttonData.map((button) => (
          <button
            key={button.gender}
            onClick={() => handleGenderSelect(button.gender)}
            className={selectedGender === button.gender ? 'active' : ''}
          >
            <img src={button.img} alt={button.alt} />
            {button.label}
          </button>
        ))}
      </ButtonBox>
      <NextButtonWrapper>
        <NextButtonStyled onClick={handleNextClick} disabled={!selectedGender}>
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
