import React, { useContext } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { AppContext } from '../context/Context';

const HeaderStyled = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .container_logo {
    width: 100%;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
      width: 20%;
    }
  }

  .logo {
    width: 200px;
    @media screen and (min-width: 768px) {
      width: 150px;
    }
  }

  .button {
    border: none;
    outline: none;
    background-color: var(--green);
    color: var(--white);
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Header = React.memo(() => {
  const { openModalAdd } = useContext(AppContext);
  return (
    <HeaderStyled>
      <div className="container_logo">
        <img src="my_unsplash_logo.svg" alt="Logo" className="logo" />
      </div>
      <Form />
      <button className="button" onClick={openModalAdd}>
        Add a photo
      </button>
    </HeaderStyled>
  );
});

export default Header;
