import styled from 'styled-components';
import Header from '../Header';
import Progressbar from '../../common/Progressbar';
import { useState } from 'react';

const buttonData = [
  { weight: '5', img: '/img/key.png', label: '열쇠 크기', alt: '열쇠' },
  {
    weight: '10',
    img: '/img/carrier.png',
    label: '캐리어 크기',
    alt: '캐리어',
  },
  { weight: '15', img: '/img/car.png', label: '자동차 크기', alt: '자동차' },
  { weight: '20', img: '/img/house.png', label: '집채', alt: '집' },
];

export default function PetWeight({ petData, setPetData, onNext }) {
  const [selectedWeight, setSelectedWeight] = useState(petData.weight || '');

  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight);
  };

  const handleNextClick = () => {
    setPetData((prevData) => ({
      ...prevData,
      weight: selectedWeight,
    }));
    onNext();
  };

  return (
    <>
      <Header />
      <Progressbar number={3} />
      <TextArea>
        <span>꿈 속에서 이상한 나라로 가는 문이 눈 앞에 있다.</span>
        <span>이 문의 크기는 얼마나 클까?</span>
      </TextArea>
      <ButtonBox>
        {buttonData.map((button) => (
          <button
            key={button.weight}
            onClick={() => handleWeightSelect(button.weight)}
            className={selectedWeight === button.weight ? 'active' : ''}
          >
            <img src={button.img} alt={button.alt} />
            {button.label}
          </button>
        ))}
      </ButtonBox>
      <NextButtonWrapper>
        <NextButtonStyled onClick={handleNextClick} disabled={!selectedWeight}>
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
    disabled ? theme.color.grey : theme.color.skyblue}; /* 비활성화 시 회색 */
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
