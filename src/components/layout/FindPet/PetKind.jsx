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

export default function PetKind({ petData, setPetData, onNext }) {
  const [activeButton, setActiveButton] = useState('');
  const [selectedKind, setSelectedKind] = useState(petData.kind);

  const handleKindSelect = (kind) => {
    setSelectedKind(kind);
    setActiveButton(kind);
  };

  const handleNextClick = () => {
    // 선택한 데이터를 메인 state에 저장
    setPetData((prevData) => ({
      ...prevData,
      kind: selectedKind,
    }));

    // 다음 단계로 이동
    onNext();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Progressbar number={1} />
        <TextArea>
          <span>어느 날 눈 앞에 동물이 나에게 달려온다!</span>
          <span>이 동물은 무엇일까?</span>
        </TextArea>
        <ButtonBox>
          <button
            onClick={() => handleKindSelect('강아지')}
            className={activeButton === '강아지' ? 'active' : ''}
          >
            <img src="/img/dog.png" alt="강아지" />
            강아지
          </button>
          <button
            onClick={() => handleKindSelect('고양이')}
            className={activeButton === '고양이' ? 'active' : ''}
          >
            <img src="/img/cat.png" alt="고양이" />
            고양이
          </button>
          <button
            onClick={() => handleKindSelect('그외')}
            className={activeButton === '그외' ? 'active' : ''}
          >
            <img src="/img/rabbit.png" alt="그 외" />그 외
          </button>
        </ButtonBox>
        <NextButtonWrapper>
          <NextButtonStyled
            onClick={handleNextClick}
            disabled={!activeButton} /* activeButton이 없을 때 버튼 비활성화 */
          >
            다음
            <img src="/img/Dog print.png" alt="다음" />
          </NextButtonStyled>
        </NextButtonWrapper>
      </ThemeProvider>
    </>
  );
}
