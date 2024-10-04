import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from '../Header';

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

export default function PetLoad() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TextArea>
          <img src="./src/assets/Group 540.png" alt="이미지" />
          <span>어떤 동물이</span>
          <span>당신에게 찾아올까요?</span>
          <img className="load" src="./src/assets/Load.png" alt="로딩바" />
        </TextArea>
      </ThemeProvider>
    </>
  );
}
