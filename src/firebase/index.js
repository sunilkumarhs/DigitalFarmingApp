import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0HyjOeSqof77I6aRVwtCoeIQpiZEsIQQ",
  authDomain: "digitalfarmingapp.firebaseapp.com",
  projectId: "digitalfarmingapp",
  storageBucket: "digitalfarmingapp.appspot.com",
  messagingSenderId: "626664483888",
  appId: "1:626664483888:web:c6c099bd6cdef043ca51f5",
  measurementId: "G-EV7BRES2T2"
};

  function listAll(folder) {
    const storageRef = firebase.storage().ref();
    // [START storage_list_all]
    // Create a reference under which you want to list
    var listRef = storageRef.child(folder);
  
    // Find all the prefixes and items.
    listRef.listAll()
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
           

            itemRef.getDownloadURL().then((url) => {
                
              })
          // All the items under listRef.
        });
      }).catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
      });
    // [END storage_list_all]
  }

  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const auth = getAuth(app);

  export const db = getFirestore(app);

  export {storage, auth, listAll, firebase as default};