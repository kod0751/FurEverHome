import styled from 'styled-components';

const ListCard = styled.div`
  width: 15rem;
  border-radius: 10px;
  font-family: 'NanumSquareNeoBold';
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  span {
    color: ${({ theme }) => theme.color.charcoal};
  }

  .info span {
    font-family: 'NanumSquareNeoHeavy';
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.color.black};
  }

  .info img {
    width: 1rem;
  }
`;

const ListCardImage = styled.div`
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default function Card({ data }) {
  return (
    <ListCard>
      <ListCardImage>
        <img src="./src/assets/Rectangle 21.png" alt="동물" />
      </ListCardImage>
      <div className="info">
        <span>{data.SPECIES_NM.replace(/\[.*?\]\s*/, '')}</span>
        <img src="./src/assets/icon.png" alt="북마크" />
      </div>
      <div>
        <span>나이</span>
        <p>{data.AGE_INFO}</p>
      </div>
      <div>
        <span>시도군</span>
        <p>{data.SIGUN_NM}</p>
      </div>
      <div>
        <span>성별</span>
        <p>{data.SEX_NM === 'M' ? '남아' : '여아'}</p>
      </div>
      <div>
        <span>중성화</span>
        <p>{data.NEUT_YN === 'Y' ? '중성화 완료' : '중성화 미완료'}</p>
      </div>
    </ListCard>
  );
}
