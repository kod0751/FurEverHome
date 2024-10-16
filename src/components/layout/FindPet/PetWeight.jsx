import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from '../Header';
import Progressbar from '../../common/Progressbar';
import { useState } from 'react';

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
      border-color: #47b2ff;
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
    disabled ? '#ccc' : theme.color.skyblue}; /* 비활성화 시 회색 */
  color: ${({ theme }) => theme.color.white};
  border-radius: 1.7rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'}; /* 비활성화 시 포인터 변경 */

  img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;

export default function PetWeight({ petData, setPetData, onNext }) {
  const [activeButton, setActiveButton] = useState('');
  const [selectedWeight, setSelectedWeight] = useState(petData.weight);

  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight);
    setActiveButton(weight);
  };

  const handleNextClick = () => {
    // 선택한 데이터를 메인 state에 저장
    setPetData((prevData) => ({
      ...prevData,
      weight: selectedWeight,
    }));
    // 다음 단계로 이동
    onNext();
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Progressbar number={3} />
      <TextArea>
        <span>꿈 속에서 이상한 나라로 가는 문이 눈 앞에 있다.</span>
        <span>이 문의 크기는 얼마나 클까?</span>
      </TextArea>
      <ButtonBox>
        <button
          onClick={() => handleWeightSelect('5')}
          className={activeButton === '5' ? 'active' : ''}
        >
          <img src="/img/key.png" alt="열쇠" />
          열쇠 크기
        </button>
        <button
          onClick={() => handleWeightSelect('10')}
          className={activeButton === '10' ? 'active' : ''}
        >
          <img src="/img/carrier.png" alt="캐리어" />
          캐리어 크기
        </button>
        <button
          onClick={() => handleWeightSelect('15')}
          className={activeButton === '15' ? 'active' : ''}
        >
          <img src="/img/car.png" alt="자동차" />
          자동차 크기
        </button>
        <button
          onClick={() => handleWeightSelect('20')}
          className={activeButton === '20' ? 'active' : ''}
        >
          <img src="/img/house.png" alt="집" />
          집채
        </button>
      </ButtonBox>
      <NextButtonWrapper>
        <NextButtonStyled
          onClick={handleNextClick}
          disabled={!activeButton} /* 선택된 버튼이 없을 때 비활성화 */
        >
          다음
          <img src="/img/Dog print.png" alt="다음" />
        </NextButtonStyled>
      </NextButtonWrapper>
    </ThemeProvider>
  );
}
