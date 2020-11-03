require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_HOST;

MongoClient.connect(url, {
  useUnifiedTopology: true
}, function(err, client) {
  

  console.log("Connected successfully to server", err);
 
  const db = client.db('sample_airbnb');
  
  const collection = db.collection('listingsAndReviews');

    collection.find({
      property_type:"House"
    })
    .limit(10)
    .toArray((err, results) => {
      console.log('Propiedades: ', results);
      client.close();
    });
  
});


