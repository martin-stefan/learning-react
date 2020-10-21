const functions = require("firebase-functions");

const express = require("express");
const app = express();

const FBAuth = require('./util/fbAuth');
const { getAllScreams, postScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users')





// const firebase = require("firebase");
// firebase.initializeApp(firebaseConfig);

// const db = admin.firestore();

app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postScream);

app.post('/signup', signup);
app.post('/login', login);
app.post('user/image', FBAuth, uploadImage);

exports.api = functions.https.onRequest(app);
