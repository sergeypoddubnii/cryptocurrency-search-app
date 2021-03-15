import React, { FC } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import preloaderSelectors from '../../redux/preloader/preloaderSelectors';
import { useSelector } from 'react-redux';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Preloader: FC = () => {
  const isLoading = useSelector(preloaderSelectors.getIsLoading);
  return isLoading ? (
    <Overlay>
      <LoaderContainer>
        <Loader type="Puff" color="#7b25aa" height={80} width={80} />;
      </LoaderContainer>
    </Overlay>
  ) : null;
};
export default Preloader;
