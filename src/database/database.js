import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();

export const addPhoto = async (photo) => {
  const { label, url } = photo;
  await db
    .collection('photos')
    .add({
      label,
      url,
      timestamp: Date.now(),
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const removePhoto = (id) => {
  db.collection('photos')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
