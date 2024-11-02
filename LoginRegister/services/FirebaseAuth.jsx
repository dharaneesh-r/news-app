// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXGraBNKlxVhPoRvNXAkWrVOKxl71sLCo",
  authDomain: "react-native-authenticat-5f91f.firebaseapp.com",
  projectId: "react-native-authenticat-5f91f",
  storageBucket: "react-native-authenticat-5f91f.firebasestorage.app",
  messagingSenderId: "656006144295",
  appId: "1:656006144295:web:f8514edcaa04581e630902",
};

let Auth;

if (getApps().length == 0) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  Auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}else{
    Auth = getAuth();
}

export default Auth;
