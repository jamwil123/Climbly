const db = require('./db')

const mountain = db.collection('mountains').doc('d365d1e0-5684-11ec-ae77-dd39361bfcf7');
// const firestoreService = require('firestore-export-import');




  
  const getData = async () => {
      try {
          const doc = await mountain.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
          
    }
    catch (error) {
      console.log(error);
    }
  };

  getData()


