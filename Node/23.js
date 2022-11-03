/*
To delete more than one document, use the deleteMany() method.

The first parameter of the deleteMany() method is 
a query object defining which documents to delete.
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});

/*
The deleteMany() method returns an object which contains information about how the 
execution affected the database.

Most of the information is not important to understand, but one object inside 
the object is called "result" which tells us if the execution went OK, and how 
many documents were affected.

The result object looks like this:

{ n: 2, ok: 1 }
*/