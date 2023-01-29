import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {getAuth} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEenFYTLZMECWSjapdHMaLti5vuUt59zc",
    authDomain: "digital-farming-4bd62.firebaseapp.com",
    projectId: "digital-farming-4bd62",
    storageBucket: "digital-farming-4bd62.appspot.com",
    messagingSenderId: "1019737702422",
    appId: "1:1019737702422:web:336eeef7875211a2e53537",
    measurementId: "G-6DZ3B57S7J"
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

  export {storage, auth, listAll, firebase as default};