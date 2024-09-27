import styled from 'styled-components';

const ListCard = styled.div`
  width: 280px;
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

export default function Card() {
  return (
    <ListCard>
      <ListCardImage>
        <img src="./src/assets/Rectangle 21.png" alt="동물" />
      </ListCardImage>
      <div className="info">
        <span> 한국고양이</span>
        <img src="./src/assets/icon.png" alt="북마크" />
      </div>
      <div>
        <span>나이</span>
        <p>1살</p>
      </div>
      <div>
        <span>시도군</span>
        <p>안산시</p>
      </div>
      <div>
        <span>성별</span>
        <p>남아</p>
      </div>
      <div>
        <span>중성화</span>
        <p>중성화 미완료</p>
      </div>
    </ListCard>
  );
}
