import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBolrqgnQIgQ11Qvj_QrqO6zpR2MSlpcQ0",
  authDomain: "apple-dc763.firebaseapp.com",
  projectId: "apple-dc763",
  storageBucket: "apple-dc763.appspot.com",
  messagingSenderId: "816074684646",
  appId: "1:816074684646:web:fb77445d9eccdf34632327",
  measurementId: "G-58JEMF873H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);