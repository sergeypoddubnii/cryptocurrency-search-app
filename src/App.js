import React from 'react';
import MainList from './components/MainList/MainList';
import FavoriteList from './components/FavoriteList/FavoriteList';
import Header from './components/Header/Header';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Container>
        <MainList />
        <FavoriteList />
      </Container>
    </>
  );
};

export default App;
