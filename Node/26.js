/*
    You can update a record, or document as it is called in MongoDB, by using the 
    updateOne() method.

The first parameter of the updateOne() method is a query object defining which document 
to update.

Note: If the query finds more than one record, only the first occurrence is updated.
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});