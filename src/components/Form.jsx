import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: url('../search_black_24dp.svg');
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 1;
    top: 50%;
    transform: translate(10px, -25%);
  }
  .form__input {
    outline: none;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
    border-radius: 12px;
    padding: 1rem;
    padding-left: 2.5rem;
    min-width: 300px;
    color: #111;

    @media screen and (min-width: 600px) {
      min-width: 350px;
    }
    @media screen and (min-width: 1000px) {
      min-width: 500px;
    }
  }
`;

const Form = React.memo(() => {
  const { filter } = useContext(AppContext);

  return (
    <FormStyled>
      <input
        type="text"
        placeholder="Search by name"
        className="form__input"
        onChange={(e) => filter(e.target.value)}
      />
    </FormStyled>
  );
});

export default Form;
