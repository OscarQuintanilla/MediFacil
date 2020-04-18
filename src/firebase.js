import firebase from 'firebase';

const config = { 
        apiKey: "AIzaSyCWdLu8k6oPQiMn5kyVNO87UWSdFXvjJdI",
        authDomain: "medifacil-e3d76.firebaseapp.com",
        databaseURL: "https://medifacil-e3d76.firebaseio.com",
        projectId: "medifacil-e3d76",
        storageBucket: "medifacil-e3d76.appspot.com",
        messagingSenderId: "420919550605",
        appId: "1:420919550605:web:6af6046ab880aabb6078c4",
        measurementId: "G-XJKX7WQZS4"
};
const fire = firebase.initializeApp(config);
export default fire;