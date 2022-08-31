import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyARgnPeczW7_YGwUO_fdy7CAGYf4Qij52g",
    authDomain: "wanderoo-36e65.firebaseapp.com",
    projectId: "wanderoo-36e65",
    storageBucket: "wanderoo-36e65.appspot.com",
    messagingSenderId: "607604894372",
    appId: "1:607604894372:web:1985492b8917edd8a31431",
    measurementId: "G-7M6JLMW7K7"
  };
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
  