import React from 'react';
import MainList from './components/MainList/MainList';
import FavoriteList from './components/FavoriteList/FavoriteList';
import Header from './components/Header/Header';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Preloader from './components/Preloader/Preloader';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 90px;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <MainList />
        <FavoriteList />
      </Container>
      <ToastContainer />
      <Preloader />
    </>
  );
};

export default App;
