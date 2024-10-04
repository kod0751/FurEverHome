import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from '../Header';
import ModalSection from '../ModalSection';
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

const CardArea = styled.div`
  width: 80%;
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.black};

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
  }

  .text {
    width: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .centerDiv {
    transform: translateY(-50px);
  }

  button {
    width: 8rem;
    height: 2rem;
    background-color: white;
    border: 1px solid #47b2ff;
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.color.skyblue};
    border-radius: 1rem;
  }
`;

const ImageArea = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 4px solid #47b2ff;
`;

const ButtonArea = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  gap: 3rem;

  .result {
    width: 14rem;
    height: 3rem;
    background-color: white;
    border: 1px solid #7f7f7f;
    border-radius: 8px;
    color: #7f7f7f;
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  .retest {
    width: 14rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.color.black};
    border-radius: 8px;
    color: ${({ theme }) => theme.color.white};
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export default function PetResult() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기 핸들러
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TextArea>
          <span>당신의 운명의 반려동물을 찾았어요!</span>
        </TextArea>
        <CardArea>
          <div className="card">
            <ImageArea>
              <img src="" alt="" />
            </ImageArea>
            <div className="text">
              <span>한국 고양이</span>
              <span>1살</span>
            </div>
            <button>보러가기</button>
          </div>
          <div className="card centerDiv">
            <ImageArea>
              <img src="" alt="" />
            </ImageArea>
            <div className="text">
              <span>믹스견</span>
              <span>1살</span>
            </div>
            <button>보러가기</button>
          </div>
          <div className="card">
            <ImageArea>
              <img src="" alt="" />
            </ImageArea>
            <div className="text">
              <span>믹스견</span>
              <span>1살</span>
            </div>
            <button>보러가기</button>
          </div>
        </CardArea>
        <ButtonArea>
          <button className="result" onClick={handleModalOpen}>
            결과 설명듣기
          </button>
          <button className="retest">테스트 다시 하기</button>
        </ButtonArea>
        {/* 모달이 열렸을 때만 ModalSection을 렌더링 */}
        {isModalOpen && <ModalSection onClose={handleModalClose} />}
      </ThemeProvider>
    </>
  );
}
