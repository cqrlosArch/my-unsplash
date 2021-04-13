import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';
import Photo from './Photo';

const GalleryStyled = styled.section`
  margin-top: 2rem;
  column-count: 2;
  column-gap: 1.5rem;
  @media screen and (min-width: 750px) {
    column-count: 3;
  }
`;

const Gallery = React.memo(() => {
  const { deletePhoto, filterPhotos } = useContext(AppContext);

  return (
    <GalleryStyled>
      {filterPhotos?.map((data) => (
        <Photo
          key={data.id}
          photo={data}
          deletePhoto={() => deletePhoto(data.id)}
        />
      ))}
    </GalleryStyled>
  );
});

export default Gallery;
