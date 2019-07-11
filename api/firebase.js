var admin = require("firebase-admin");

var serviceAccount = require("../ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-api-test-4f822.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("Test");
// ref.once("value", function(result) {
//   console.log(result.val());
// });

exports.GetAll = function(cb) {
  ref.once("value", function(snapshot) {
    cb(null, snapshot.val());
    console.log(snapshot.val());
  });
};

exports.AddFirebase = function(val) {
  db.ref("users/" + userId).set(
    {
      username: name,
      email: email,
      profile_picture: imageUrl
    },
    function(error) {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    }
  );
};

// ref.set({
//     Value: {
//         test1: 'Test2'
//     },
//     Value2: {
//         test2 : 'Test3'
//     },
//     Value3: {
//         test3 : 'Test5'
//     }
// })

// var refChild = ref.child('Value2');
// refChild.once("value", function(snapshot) {
//     console.log(snapshot.val());
//   });
