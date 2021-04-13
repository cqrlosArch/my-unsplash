import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';

const ModalAddStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    background: #ffffff;
    border-radius: 12px;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    width: 90%;

    @media screen and (min-width: 600px) {
      width: 60%;
      top: 40%;
    }
    @media screen and (min-width: 768px) {
      width: 35%;
    }

    &-title {
      font-size: 24px;
      color: #333333;
    }
    &-form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 200px;
      .label {
        color: #4f4f4f;
        margin-bottom: -0.5rem;
        align-self: flex-start;
      }
      .input {
        outline: none;
        border: 1px solid #4f4f4f;
        box-sizing: border-box;
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
        border-radius: 12px;
        padding: 0.8rem 1rem;
        width: 100%;
      }

      .container-button {
        align-self: flex-end;
        .btn {
          margin-left: 0.5rem;
          cursor: pointer;
          outline: none;
          &-cancel {
            border: none;
            background-color: transparent;
            color: var(--gray);
          }
          &-submit {
            box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
            border: none;
            border-radius: 12px;
            background-color: var(--green);
            color: var(--white);
            padding: 0.5rem 1rem;
          }
        }
      }
    }
  }
`;

const ModalAdd = React.memo(() => {
  const [label, setLabel] = useState('');
  const [url, setUrl] = useState('');
  const { closeModalAdd, addNewPhoto } = useContext(AppContext);

  return (
    <ModalAddStyled>
      <div className="modal">
        <h2 className="modal-title">Add a new photo</h2>
        <form
          onSubmit={(e) => addNewPhoto(e, { label, url })}
          autoComplete="off"
          className="modal-form"
        >
          <label htmlFor="label" className="label">
            Label
          </label>
          <input
            type="text"
            id="label"
            placeholder="Enter a label for your photo"
            className="input"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <label htmlFor="url" className="label">
            Photo URL
          </label>
          <input
            type="text"
            id="url"
            placeholder="Enter the url of the photo"
            className="input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="container-button">
            <button
              className="btn btn-cancel"
              type="button"
              onClick={closeModalAdd}
            >
              Cancel
            </button>
            <button className="btn btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </ModalAddStyled>
  );
});

export default ModalAdd;
