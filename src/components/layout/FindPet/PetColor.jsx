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
  padding: 4rem;
  gap: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 15rem;
    height: 3.4rem;
    margin-top: 2rem;
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.xl};
    background-color: ${({ theme }) => theme.color.skyblue};
    color: ${({ theme }) => theme.color.white};
    border-radius: 1.7rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  button img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;

export default function PetColor({ petData, setPetData, onNext }) {
  const [activeButton, setActiveButton] = useState('');
  const [selectedColor, setSelectedColor] = useState(petData.color);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setActiveButton(color);
  };

  const handleNextClick = () => {
    // 선택한 데이터를 메인 state에 저장
    setPetData((prevData) => ({
      ...prevData,
      color: selectedColor,
    }));

    console.log(petData);
    // 다음 단계로 이동
    onNext();
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Progressbar number={4} />
      <TextArea>
        <span>나를 위한 티셔츠를 고르고 있다.</span>
        <span>어떤 색깔이 좋을까? 3개이상 골라보자!</span>
      </TextArea>
      <ButtonBox>
        <button
          onClick={() => handleColorSelect('흰색')}
          className={activeButton === '흰색' ? 'active' : ''}
        >
          <img src="./src/assets/white.png" alt="흰색" />
          흰색
        </button>
        <button
          onClick={() => handleColorSelect('검은색')}
          className={activeButton === '검은색' ? 'active' : ''}
        >
          <img src="./src/assets/black.png" alt="검은색" />
          검은색
        </button>
        <button
          onClick={() => handleColorSelect('회색')}
          className={activeButton === '회색' ? 'active' : ''}
        >
          <img src="./src/assets/grey.png" alt="회색" />
          회색
        </button>
        <button
          onClick={() => handleColorSelect('갈색')}
          className={activeButton === '갈색' ? 'active' : ''}
        >
          <img src="./src/assets/brown.png" alt="갈색" />
          갈색
        </button>
      </ButtonBox>
      <ButtonBox>
        <button
          onClick={() => handleColorSelect('금색')}
          className={activeButton === '금색' ? 'active' : ''}
        >
          <img src="./src/assets/goldColor.png" alt="금색" />
          금색
        </button>
        <button
          onClick={() => handleColorSelect('삼색')}
          className={activeButton === '삼색' ? 'active' : ''}
        >
          <img src="./src/assets/threeColor.png" alt="삼색" />
          삼색
        </button>
        <button
          onClick={() => handleColorSelect('고등어색')}
          className={activeButton === '고등어색' ? 'active' : ''}
        >
          <img src="./src/assets/multiColor.png" alt="고등어색" />
          고등어색
        </button>
        <button
          onClick={() => handleColorSelect('흑백')}
          className={activeButton === '흑백' ? 'active' : ''}
        >
          <img src="./src/assets/bwColor.png" alt="흑백" />
          흑백
        </button>
      </ButtonBox>
      <NextButton>
        <button onClick={handleNextClick}>
          결과보기
          <img src="./src/assets/Dog print.png" />
        </button>
      </NextButton>
    </ThemeProvider>
  );
}
