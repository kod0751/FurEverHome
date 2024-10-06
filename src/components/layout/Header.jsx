import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderSection = styled.div`
  margin: 2rem auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.black};

  ul {
    display: flex;
    gap: 2rem;
  }
  .logo {
    font-family: 'jalnan';
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  .logo img {
    width: 15%;
    height: 15%;
  }

  li {
    font-family: 'NanumSquareNeoExtraBold';
  }
`;

export default function Header() {
  return (
    <div className="container">
      <HeaderSection>
        <div className="logo">
          <Link to="/">
            발바닥
            <img src="./src/assets/Group 540.png" />
            구조대
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/list">유기동물보기</Link>
          </li>
          <li>
            <Link to="/find">털친소</Link>
          </li>
          <li>
            <Link to="/location">주변 보호소 찾기</Link>
          </li>
          <li>
            <Link to="/mypet">나의 관심동물</Link>
          </li>
        </ul>
      </HeaderSection>
    </div>
  );
}
