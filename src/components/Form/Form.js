import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import mainCryptoAction from '../../redux/mainCryptocurrency/mainCryptoActions';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 18px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 3px;
  color: #657b9a;
  ::placeholder {
    font-size: 16px;
  }
`;

const Button = styled.button`
  font-size: 18px;
  background: #c0d6e4;
  border: 1px solid #000;
  border-radius: 3px;
`;

const Form = styled.form`
  margin: 10px;
`;

const SearchForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(mainCryptoAction.findCrypto(value.toUpperCase()));
    setValue('');
  };

  const handlerChange = e => {
    return setValue(e.target.value);
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Input
        type="text"
        name="search"
        value={value}
        onChange={handlerChange}
        placeholder="input symbol or name..."
      />
      <Button type="submit">search</Button>
    </Form>
  );
};
export default SearchForm;
