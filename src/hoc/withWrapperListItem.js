import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  padding: 0;
  margin: 0;
  margin-right: 10px;
`;

const withWrapperListItem = Component => props => {
  const { name, symbol, price } = props;

  return (
    <Li>
      <Title>
        {name}
        &nbsp;
        {symbol}
      </Title>
      <div>
        <span>{price}$</span>
        <Component {...props} />
      </div>
    </Li>
  );
};

export default withWrapperListItem;
