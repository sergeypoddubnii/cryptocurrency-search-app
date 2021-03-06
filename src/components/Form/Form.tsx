import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import mainCryptoActions from '../../redux/mainCryptocurrency/mainCryptoActions';

const Input = styled.input`
  font-size: 18px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #657b9a;
  outline: none;
  ::placeholder {
    font-size: 16px;
    color: #fff;
    opacity: 0.7;
  }
`;

const Button = styled.button`
  font-size: 18px;
  background: transparent;
  border: none;
  color: #fff;
`;

const Form = styled.form`
  margin-right: 40px;
`;

const SearchForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch(mainCryptoActions.findCrypto(value.toLowerCase().trim()));
		setValue('');
	};

	const handlerChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<Form onSubmit={handlerSubmit}>
				<Input
					type="text"
					name="search"
					value={value}
					onChange={handlerChange}
					placeholder="input name or symbol..."
				/>
				<Button type="submit" disabled={value.length === 0}>
					<FontAwesomeIcon icon={faSearch} />
				</Button>
			</Form>
		</>
	);
};

export default SearchForm;
