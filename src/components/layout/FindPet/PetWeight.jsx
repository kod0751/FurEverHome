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
export default function PetWeight() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Progressbar number={3} />
        <TextArea>
          <span>꿈 속에서 이상한 나라로 가는 문이 눈 앞에 있다.</span>
          <span>이 문의 크기는 얼마나 클까?</span>
        </TextArea>
        <ButtonBox>
          <button>
            <img src="./src/assets/key.png" alt="열쇠" />
            열쇠 크기
          </button>
          <button>
            <img src="./src/assets/carrier.png" alt="캐리어" />
            캐리어 크기
          </button>
          <button>
            <img src="./src/assets/car.png" alt="자동차" />
            자동차 크기
          </button>
          <button>
            <img src="./src/assets/house.png" alt="집" />
            집채
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
