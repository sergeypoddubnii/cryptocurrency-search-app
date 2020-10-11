import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 22px;
  padding: 0;
  margin-bottom: 10px;
`;

const Container = styled.div`
  width: 500px;
  text-align: center;
`;

const withTitleList = options => Component => props => {
  const { title } = options;
  return (
    <Container>
      <Title>{title}</Title>
      <Component {...props} />
    </Container>
  );
};

export default withTitleList;
