//import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
//import {getFirestore} from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import{
    getFirestore ,collection,getDocs
} from  "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyDb8t41DwYj1vXMbrSBdaR-4cmDGPTkVhs",
//     authDomain: "pblproject-8a8c3.firebaseapp.com",
//     projectId: "pblproject-8a8c3",
//     storageBucket: "pblproject-8a8c3.appspot.com",
//     messagingSenderId: "879113736328",
//     appId: "1:879113736328:web:ac62c0480f46cc745ecf3d"
//   };


const firebaseConfig = {
         apiKey: "AIzaSyDkVLOmDMKC3-bNWkcNNulm1cVqknlr35U",
         authDomain: "pbl-project-32971.firebaseapp.com",
         projectId: "pbl-project-32971",
         storageBucket: "pbl-project-32971.appspot.com",
         messagingSenderId: "781159570506",
        appId: "1:781159570506:web:635689c2a4e90894219ab3",
        measurementId: "G-NCK1PRP35V"
     };
     const firebaseApp = firebase.initializeApp(firebaseConfig);
///init database
 export const db = firebaseApp.firestore();
const  colRef = collection(db , "customersData" );
//get collection data
getDocs(colRef)
.then((snapshot)=>{
    console.log(snapshot.docs)
})
export  const auth = firebase.auth();

export default db;

  //   const app = initializeApp(firebaseConfig);
   //  export  const auth = firebase.auth();
   // export const auth = getAuth(app);
  //   export const db = getFirestore(app);
 // var db = app.firestore();
  export  const provider = new GoogleAuthProvider();
 //  export default db;

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import{
//     getFirestore ,collection,getDocs
// } from  "firebase/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDkVLOmDMKC3-bNWkcNNulm1cVqknlr35U",
//     authDomain: "pbl-project-32971.firebaseapp.com",
//     projectId: "pbl-project-32971",
//     storageBucket: "pbl-project-32971.appspot.com",
//     messagingSenderId: "781159570506",
//     appId: "1:781159570506:web:635689c2a4e90894219ab3",
//     measurementId: "G-NCK1PRP35V"
//   };
//   //init service
 
//   //init app
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// ///init database
// var db = firebaseApp.firestore();
// const  colRef = collection(db , "customersData" );
// //get collection data
// getDocs(colRef)
// .then((snapshot)=>{
//     console.log(snapshot.docs)
// })
// export  const auth = firebase.auth();

// export default db;