import styled from 'styled-components';

const PageNationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 5rem 0;
`;

const PageButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ active, theme }) =>
      active ? theme.color.skyblue : theme.color.charcoal};
  border-radius: 0.3rem;
  background-color: ${({ active, theme }) =>
    active ? theme.color.skyblue : theme.color.white};
  color: ${({ active, theme }) =>
    active ? theme.color.white : theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: 'NanumSquareNeoExtraBold';
  cursor: pointer;
`;

const NavigationButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ active, theme }) =>
    active ? theme.color.skyblue : theme.color.white};
  color: ${({ active, theme }) =>
    active ? theme.color.white : theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;

  &:disabled {
    visibility: hidden;
  }
`;

const PageNation = ({ value, onChange, total }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber !== value) {
      onChange(pageNumber); // 페이지 변경 시 호출
    }
  };

  // 이전 페이지 이동
  const handlePrevClick = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  // 다음 페이지 이동
  const handleNextClick = () => {
    if (value < total) {
      onChange(value + 1);
    }
  };

  const renderPageButtons = () => {
    const pages = [];

    // 최대 10개의 페이지 버튼을 보여주고, 그 이상은 적절히 잘라서 표시
    const maxPagesToShow = 5;
    const startPage = Math.max(1, value - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(total, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          active={i === value}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </PageButton>
      );
    }

    return pages;
  };

  return (
    <PageNationWrapper>
      <NavigationButton onClick={handlePrevClick} disabled={value === 1}>
        <box-icon name="chevron-left" color="#323232" size="lg"></box-icon>
      </NavigationButton>
      {renderPageButtons()}
      <NavigationButton onClick={handleNextClick} disabled={value === total}>
        <box-icon name="chevron-right" color="#323232" size="lg"></box-icon>
      </NavigationButton>
    </PageNationWrapper>
  );
};

export default PageNation;
