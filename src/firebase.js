// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq7oVFDTjoZuQ8-UdcmlkWchipnR5ER6w",
  authDomain: "hosting-app-65859.firebaseapp.com",
  projectId: "hosting-app-65859",
  storageBucket: "hosting-app-65859.appspot.com",
  messagingSenderId: "835168140005",
  appId: "1:835168140005:web:823f23fec9074a19e9b20c",
  measurementId: "G-W675FDVGH7"
};

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(firebaseApp)


export {db}