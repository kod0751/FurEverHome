import { Pagination } from '@mantine/core';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomPagination = styled(Pagination)`
  .mantine-Pagination-item {
    background-color: #47b2ff;
    color: white;
    border: 1px solid #ddd;
  }

  .mantine-Pagination-item[data-active] {
    background-color: #000;
    color: #fff;
  }
`;

export default function PageNation({ value, onChange, total }) {
  return (
    <Container>
      <CustomPagination
        value={value}
        onChange={onChange}
        total={total}
        mt="lg"
        styles={{
          dots: { display: 'none' },
        }}
        siblings={2}
        boundaries={0}
      />
    </Container>
  );
}
