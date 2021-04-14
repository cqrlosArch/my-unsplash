import React, { useCallback, useEffect, useState } from 'react';
import { db, removePhoto, addPhoto } from '../database/database';

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [filterPhotos, setFilterPhotos] = useState();
  const [isModalAdd, setIsModalAdd] = useState(false);

  const addNewPhoto = async (e, data) => {
    e.preventDefault();
    await addPhoto(data);

    setIsModalAdd(false);
  };

  const deletePhoto = (id) => {
    removePhoto(id);
  };

  const openModalAdd = () => {
    setIsModalAdd(true);
  };
  const closeModalAdd = () => {
    setIsModalAdd(false);
  };

  const filter = useCallback(
    (value) => {
      setFilterPhotos(
        photos.filter(
          (p) =>
            p.label.toLowerCase().includes(value.toLowerCase()) || value === ''
        )
      );
    },
    [photos]
  );

  const getDataDB = useCallback(() => {
    db.collection('photos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((querySnapshot) => {
        let photosArr = [];
        querySnapshot.forEach((doc) => {
          photosArr.push({
            id: doc.id,
            label: doc.data().label,
            url: doc.data().url,
          });
        });

        setPhotos(photosArr);
        setFilterPhotos(photosArr);
      });
  }, []);

  useEffect(() => {
    getDataDB();
  }, [getDataDB]);

  const value = {
    photos,
    isModalAdd,
    openModalAdd,
    closeModalAdd,
    addNewPhoto,
    deletePhoto,
    filter,
    filterPhotos,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContextConsumer = AppContext.Consumer;
