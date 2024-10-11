import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from '../Header';
import ModalSection from '../ModalSection';
import { useEffect, useState } from 'react';
import ResultCard from '../../common/ResultCard';
import { Link } from 'react-router-dom';
import { useFetchPetData } from '../../../hooks/useFetchPetData';

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
    cursor: pointer;
  }

  .retest {
    width: 14rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.color.black};
    border-radius: 8px;
    color: ${({ theme }) => theme.color.white};
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
    cursor: pointer;
  }
`;

const NotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 25rem;
    margin-top: 5rem;
  }

  span {
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.color.black};
    margin: 2rem 0 2rem 0;
  }

  p {
    font-family: 'NanumSquareNeoBold';
    color: ${({ theme }) => theme.color.black};
  }

  .subText {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    width: 20rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.color.skyblue};
    border: none;
    border-radius: 1.5rem;
    color: ${({ theme }) => theme.color.white};
    font-family: 'NanumSquareNeoExtraBold';
    font-size: ${({ theme }) => theme.fontSize.md};
    cursor: pointer;
  }
`;

export default function PetResult({ petData, setPetData, setStep }) {
  const { data } = useFetchPetData();

  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useQuery로부터 받은 데이터가 있으면 처리
  useEffect(() => {
    if (data) {
      const { items } = data;
      setFilteredData(items);
    }
  }, [data]);

  // 모달 열기 핸들러
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const textclick = () => {
    console.log(petData);
  };

  const reStart = () => {
    setPetData({
      kind: '', // 동물 종류 초기화
      gender: '', // 성별 초기화
      weight: '', // 체중 초기화
      color: '', // 색상 초기화
    });
    setStep(0);
    setFilteredData([]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!data) return;

    const { items } = data;
    const newFilteredData = items.filter((item) => {
      const whiteColorKeywords = ['아이보리', '크림', '백색', '백', '흰'];
      const blackColorKeywords = [
        '흑색',
        '흑갈',
        '검정',
        '회흑',
        '흑',
        '블랙탄',
      ];
      const greyColorKeywords = ['회백색', '검/흰', '흰/검', '쥐색'];
      const brownColorKeywords = [
        '흰색,갈색',
        '흰,갈',
        '갈색흰색',
        '갈색,베이지',
        '옅은갈색',
        '연갈',
        '베이지색',
        '초코',
        '갈',
      ];
      const goldColorKeywords = ['노랑색', '황색', '크림색', '치즈색', '치즈'];
      const threeColorKeywords = ['흰색,검정,갈색', '삼색', '백흑갈색'];
      const multiColorKeywords = ['고등어', '반점무늬'];
      const bwColorKeywords = [
        '검백색',
        '얼룩',
        '검/흰',
        '검.백',
        '검정흰색',
        '검줄/흰',
        '백흑색',
      ];

      // 색상 필터링
      const colorMatches = petData.color.some((color) => {
        switch (color) {
          case '흰색':
            return whiteColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '검정':
            return blackColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '회색':
            return greyColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '갈색':
            return brownColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '금색':
            return goldColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '삼색':
            return threeColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '고등어색':
            return multiColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          case '흑백':
            return bwColorKeywords.some((keyword) =>
              item.COLOR_NM.includes(keyword)
            );
          default:
            return false;
        }
      });

      // 무게 필터
      const weightValue = parseFloat(item.BDWGH_INFO.match(/[0-9.]+/)[0]);
      const weightMatches =
        (petData.weight === '5' && weightValue < 5) ||
        (petData.weight === '10' && weightValue >= 5 && weightValue < 10) ||
        (petData.weight === '15' && weightValue >= 10 && weightValue < 15) ||
        (petData.weight === '20' && weightValue >= 15);

      return (
        // 종류 필터 (강아지, 고양이, 그외) - AND 연산자로 변경
        ((petData.kind === '강아지' && item.SPECIES_NM.includes('개')) ||
          (petData.kind === '고양이' && item.SPECIES_NM.includes('고양이')) ||
          (petData.kind === '그외' && item.SPECIES_NM.includes('기타축종'))) &&
        // 성별 필터 (여아, 남아)
        (petData.gender === '여아'
          ? item.SEX_NM === 'F'
          : item.SEX_NM === 'M') &&
        // 무게 필터
        weightMatches &&
        // 색상 필터
        colorMatches
      );
    });

    setFilteredData(newFilteredData); // 필터링된 데이터를 업데이트
  }, [petData, data]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        {filteredData.length < 3 ? (
          <NotFoundPage>
            <div>
              <img src="/img/Group 382.png" alt="이미지" />
            </div>
            <span>운명의 반려동물을 찾지 못 했어요</span>
            <div className="subText">
              <p>
                하지만 지금 당신의 따뜻한 마음을 기다리는 친구들이 있습니다.
              </p>
              <p>유기동물 입양으로 가족이 되어주세요.</p>
            </div>
            <ButtonArea>
              <Link to="/list">
                <button>유기동물 보기</button>
              </Link>
            </ButtonArea>
          </NotFoundPage>
        ) : (
          <>
            <TextArea>
              <span onClick={textclick}>
                당신의 운명의 반려동물을 찾았어요!
              </span>
            </TextArea>

            <ResultCard filteredData={filteredData} />
            <ButtonArea>
              <button className="result" onClick={handleModalOpen}>
                결과 설명듣기
              </button>
              <button className="retest" onClick={reStart}>
                테스트 다시 하기
              </button>
            </ButtonArea>
          </>
        )}

        {/* 모달이 열렸을 때만 ModalSection을 렌더링 */}
        {isModalOpen && <ModalSection onClose={handleModalClose} />}
      </ThemeProvider>
    </>
  );
}
