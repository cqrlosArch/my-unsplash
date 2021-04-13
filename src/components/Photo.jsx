import React from 'react';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  margin-bottom: 1.5rem;
  cursor: pointer;
  position: relative;

  .photo-info {
    opacity: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: 10;
    transition: opacity 0.1s ease-in-out;
    &:hover {
      opacity: 1;
    }

    .button-delete {
      position: absolute;
      right: 10px;
      top: 10px;
      outline: none;
      background-color: transparent;
      border: 1px solid var(--red);
      color: var(--red);
      border-radius: 38px;
      padding: 0.3rem .5rem;
      cursor: pointer;
      &:hover {
        background-color: var(--red);
        border: 1px solid var(--red);
        color: var(--white);
      }
    }
    .label {
      position: absolute;
      bottom: 0;
      left: 20px;
      font-weight: 700;
      font-size: 18px;
      color: var(--white);
    }
  }
`;

const PhotoStyled = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
  loading: 'lazy',
}))`
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;

  &:hover {
    filter: brightness(0.5);
  }
`;

const Photo = React.memo(({ photo, deletePhoto }) => {
  const { label, url } = photo;
  return (
    <PhotoContainer>
      <div className="photo-info">
        <button className="button-delete" onClick={deletePhoto}>
          Delete
        </button>
        <p className="label">{label}</p>
      </div>
      <PhotoStyled src={url} alt={label} />
    </PhotoContainer>
  );
});

export default Photo;
