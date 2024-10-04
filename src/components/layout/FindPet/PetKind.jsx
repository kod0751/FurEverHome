import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from '../Header';
import Progressbar from '../../common/progressbar';

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
  margin-top: 5rem;

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
  }
  button img {
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;

export default function PetKind() {
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
          <button>
            <img src="./src/assets/dog.png" alt="강아지" />
            강아지
          </button>
          <button>
            <img src="./src/assets/cat.png" alt="고양이" />
            고양이
          </button>
          <button>
            <img src="./src/assets/rabbit.png" alt="그 외" />그 외
          </button>
        </ButtonBox>
        <NextButton>
          <button>
            다음
            <img src="./src/assets/Dog print.png" />
          </button>
        </NextButton>
      </ThemeProvider>
    </>
  );
}
