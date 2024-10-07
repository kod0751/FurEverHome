import { Link, NavLink } from 'react-router-dom';
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
  .active {
    color: ${({ theme }) => theme.color.blue}; /* 활성화된 링크에 다른 색상 */
  }
`;

export default function Header() {
  return (
    <div className="container">
      <HeaderSection>
        <div className="logo">
          <Link to="/">
            발바닥
            <img src="/img/Group 540.png" alt="logo" />
            구조대
          </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/list" activeClassName="active">
              유기동물보기
            </NavLink>
          </li>
          <li>
            <NavLink to="/find" activeClassName="active">
              털친소
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" activeClassName="active">
              주변 보호소 찾기
            </NavLink>
          </li>
          <li>
            <NavLink to="/mypet" activeClassName="active">
              나의 관심동물
            </NavLink>
          </li>
        </ul>
      </HeaderSection>
    </div>
  );
}
