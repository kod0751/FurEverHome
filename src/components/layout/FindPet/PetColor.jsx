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

const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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

export default function PetColor({ petData, setPetData, onNext }) {
  const [activeButtons, setActiveButtons] = useState([]); // 선택한 색상들을 저장하는 배열
  const [selectedColors, setSelectedColors] = useState(petData.color || []);

  const handleColorSelect = (color) => {
    setSelectedColors((prevSelectedColors) => {
      if (prevSelectedColors.includes(color)) {
        return prevSelectedColors.filter(
          (selectedColor) => selectedColor !== color
        );
      } else {
        return [...prevSelectedColors, color];
      }
    });

    setActiveButtons((prevActiveButtons) => {
      if (prevActiveButtons.includes(color)) {
        return prevActiveButtons.filter(
          (activeButton) => activeButton !== color
        );
      } else {
        return [...prevActiveButtons, color];
      }
    });
  };

  const handleNextClick = () => {
    // 선택한 데이터를 메인 state에 저장
    setPetData((prevData) => ({
      ...prevData,
      color: selectedColors,
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
          className={activeButtons.includes('흰색') ? 'active' : ''}
        >
          <img src="/img/white.png" alt="흰색" />
          흰색
        </button>
        <button
          onClick={() => handleColorSelect('검은색')}
          className={activeButtons.includes('검은색') ? 'active' : ''}
        >
          <img src="/img/black.png" alt="검은색" />
          검은색
        </button>
        <button
          onClick={() => handleColorSelect('회색')}
          className={activeButtons.includes('회색') ? 'active' : ''}
        >
          <img src="/img/grey.png" alt="회색" />
          회색
        </button>
        <button
          onClick={() => handleColorSelect('갈색')}
          className={activeButtons.includes('갈색') ? 'active' : ''}
        >
          <img src="/img/brown.png" alt="갈색" />
          갈색
        </button>
      </ButtonBox>
      <ButtonBox>
        <button
          onClick={() => handleColorSelect('금색')}
          className={activeButtons.includes('금색') ? 'active' : ''}
        >
          <img src="/img/goldColor.png" alt="금색" />
          금색
        </button>
        <button
          onClick={() => handleColorSelect('삼색')}
          className={activeButtons.includes('삼색') ? 'active' : ''}
        >
          <img src="/img/threeColor.png" alt="삼색" />
          삼색
        </button>
        <button
          onClick={() => handleColorSelect('고등어색')}
          className={activeButtons.includes('고등어색') ? 'active' : ''}
        >
          <img src="/img/multiColor.png" alt="고등어색" />
          고등어색
        </button>
        <button
          onClick={() => handleColorSelect('흑백')}
          className={activeButtons.includes('흑백') ? 'active' : ''}
        >
          <img src="/img/bwColor.png" alt="흑백" />
          흑백
        </button>
      </ButtonBox>
      <NextButtonWrapper>
        <NextButtonStyled
          onClick={handleNextClick}
          disabled={activeButtons.length < 3} // 3개 이상의 색상이 선택되었을 때만 버튼 활성화
        >
          결과보기
          <img src="/img/Dog print.png" alt="결과보기" />
        </NextButtonStyled>
      </NextButtonWrapper>
    </ThemeProvider>
  );
}
