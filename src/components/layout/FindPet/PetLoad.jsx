import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from '../Header';
import { useEffect } from 'react';

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'NanumSquareNeoExtraBold';
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.color.black};
  padding-top: 10rem;
  gap: 1rem;

  .load {
    margin-top: 2rem;
  }
`;

export default function PetLoad({ onNext }) {
  useEffect(() => {
    // 3초 후에 onNext를 호출하여 다음 단계로 이동
    const timer = setTimeout(() => {
      onNext();
    }, 3000); // 3000ms = 3초

    // 컴포넌트가 언마운트되면 타이머를 정리
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TextArea>
          <img src="/img/Group 540.png" alt="이미지" />
          <span>어떤 동물이</span>
          <span>당신에게 찾아올까요?</span>
          <img className="load" src="/img/Load.png" alt="로딩바" />
        </TextArea>
      </ThemeProvider>
    </>
  );
}
