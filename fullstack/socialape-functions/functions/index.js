const functions = require('firebase-functions');


let admin = require("firebase-admin");

let serviceAccount = require("../socialape-93bcf-firebase-adminsdk-p88zc-4e47e7a1ac.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-93bcf.firebaseio.com"
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getScreams = functions.https.onRequest((req, res) => {
  admin
    .firestore()
    .collection('screams')
    .get()
    .then(data => {
      let screams = [];
      data.forEach(doc => {
        screams.push(doc.data());
      });
      return res.json(screams);
    })
    .catch(err => console.error(err));
});
