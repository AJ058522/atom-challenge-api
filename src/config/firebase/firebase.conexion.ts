const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("../../../atom-challenge-f6fd5-firebase-adminsdk-bbdow-d0809d94cc.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL,
});

module.exports = firebaseAdmin;
