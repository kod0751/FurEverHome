import styled from 'styled-components';

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
    cursor: pointer;
  }
`;

const ImageArea = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 4px solid #47b2ff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const calculateAge = (birthInfo) => {
  const currentYear = new Date().getFullYear();

  // 출생 연도 추출 (2024(60일 미만)(년생) 형식에서 연도만 가져오기)
  const birthYearMatch = birthInfo.match(/(\d{4})/);
  if (birthYearMatch) {
    const birthYear = parseInt(birthYearMatch[0], 10);
    let age = currentYear - birthYear;

    // 만약 60일 미만이라면 나이를 0으로 설정
    if (birthInfo.includes('60일 미만')) {
      age = 0;
    }

    return age;
  }

  return '정보 없음'; // 출생 연도 정보가 없는 경우 처리
};

export default function ResultCard({ filteredData }) {
  const limitedData = filteredData.slice(0, 3);

  return (
    <CardArea>
      {limitedData.map((data, index) => (
        <div
          className="card"
          key={index}
          style={index === 1 ? { transform: 'translateY(-50px)' } : {}}
        >
          <ImageArea>
            <img src={data.IMAGE_COURS} alt="이미지" />
          </ImageArea>
          <div className="text">
            <span>{data.SPECIES_NM.replace(/\[.*?\]\s*/, '')}</span>
            <span>{calculateAge(data.AGE_INFO)} 살</span>
          </div>
          <button>보러가기</button>
        </div>
      ))}
    </CardArea>
  );
}
