import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';
import ModalAdd from './ModalAdd';
const WrapperStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
`;

const Wrapper = ({ children }) => {
  const { isModalAdd } = useContext(AppContext);
  return (
    <WrapperStyled>
      {children}
      {isModalAdd && <ModalAdd />}
    </WrapperStyled>
  );
};

export default Wrapper;
