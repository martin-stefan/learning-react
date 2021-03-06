const { admin, db } = require('../util/admin');


const firebaseConfig = require('../util/config')
const firebase = require('firebase')
firebase.initializeApp(firebaseConfig);

const { validateSignupData, validateLoginData } = require('../util/validators');
// const admin = require('../util/admin');


exports.signup =  (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  const { valid, errors } = validateSignupData(newUser);

  if (!valid) {
    return res.status(400).json(errors);
  }

  const noImg = 'no-image.png';

  // validate data
  let token, userId;
  db.doc(`/users/${newUser.handle}`).get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({ handle: 'this handle is already taken'})
      } else {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
      }
    })
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
        userId
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({ email: "email is already in use"});
      } else{
        return res.status(500).json({ error: err.code });
      }
    });
}


exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(user);

  if (!valid) {
    return res.status(400).json(errors);
  }

  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({ token });
    })
    .catch(err => {
      console.error(err);
      if (err.code === 'auth/wrong-password') {
        return res.status(403).json({ general: "wrong password"});
      } else {
        return res.status(500).json({ error: err.code });
      }
    })
};

exports.uploadImage = (req, res) => {

  //npm install --save busboy
  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs');
  const busboy = new BusBoy({headers: req.headers});

  let imageFileName;
  let imageToBe = {}

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== 'image/jpeg' && mimetype !== 'image/jpeg') {
      return res.status(400).json( { error: 'wrong file type'} );
    }
    // image.png
    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    imageFileName = `12345.${imageExtension}`;

    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBe = { filepath, mimetype };

    file.pipe(fs.createWriteStream(filepath));

  });

  busboy.on('finish', () => {
    admin.storage().bucket().upload(imageToBe.filepath, {
      resumable: false,
      metadata: {
        metadata: {
          contentType: imageToBe.mimetype
        }
      }
    })
    .then(() => {
      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`;
      return db.doc(`/users/${req.user.handle}`).update({ imageUrl });
    })
    .then(() => {
      return res.json({ message: 'image uploaded successfully '});
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
  });

  busboy.end(req.rawBody);
};