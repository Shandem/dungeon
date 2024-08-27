// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com"
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.post('/verifyAdmin', async (req, res) => {
  const { uid } = req.body;
  try {
    const userRecord = await admin.auth().getUser(uid);
    const customClaims = userRecord.customClaims;

    if (customClaims && customClaims.admin === true) {
      res.status(200).send({ message: 'Admin verified' });
    } else {
      res.status(403).send({ message: 'Not an admin' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
