import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAlUMhoyLA4cg0GVRgpd60vua4PUM2BA8M",
    authDomain: "iu-connect.firebaseapp.com",
    projectId: "iu-connect",
    storageBucket: "iu-connect.appspot.com",
    messagingSenderId: "278976930503",
    appId: "1:278976930503:web:cd9c5160513fe14580d4e2"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export{ auth,provider,storage};
  export default db;