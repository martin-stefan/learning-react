const functions = require("firebase-functions");

// const admin = require("firebase-admin");
// let serviceAccount = require("../socialape-93bcf-firebase-adminsdk-90xcp-6e1d3e7e15.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://socialape-93bcf.firebaseio.com"
// });
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
// var admin = require('firebase-admin');
// var app = admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.getScreams = functions.https.onRequest((req, res) => {
  admin
    .firestore()
    .collection("screams")
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push(doc.data());
      });
      return res.json(screams);
    })
    .catch((err) => console.error(err));
});
