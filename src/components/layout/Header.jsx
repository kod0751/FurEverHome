import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderSection = styled.div`
  margin: 2rem auto;
  width: 90%;
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
    transform: translateY(0.2rem);
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
            <NavLink
              to="/list"
              className={({ isActive }) => (isActive ? 'active' : '')} // active 속성을 클래스 이름으로 적용
            >
              유기동물보기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find"
              className={({ isActive }) => (isActive ? 'active' : '')} // active 클래스 적용
            >
              털친소
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              className={({ isActive }) => (isActive ? 'active' : '')} // active 클래스 적용
            >
              주변 보호소 찾기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mypet"
              className={({ isActive }) => (isActive ? 'active' : '')} // active 클래스 적용
            >
              나의 관심동물
            </NavLink>
          </li>
        </ul>
      </HeaderSection>
    </div>
  );
}
