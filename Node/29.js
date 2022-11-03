// Update Many Documents
// To update all documents that meets the criteria of the query, use the 
// updateMany() method.

/*
The Result Object
The updateOne() and the updateMany() methods return an object which contains information a
bout how the execution affected the database.

Most of the information is not important to understand, but one object inside the object 
is called "result" which tells us if the execution went OK, and how many documents were 
affected.

The result object looks like this:

{ n: 1, nModified: 2, ok: 1 }
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});