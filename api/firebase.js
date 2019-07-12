var admin = require("firebase-admin");

var serviceAccount = require("../ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-api-test-4f822.firebaseio.com"
});

var db = admin.database();
// ref.once("value", function(result) {
//   console.log(result.val());
// });

exports.GetAllFirebase = function(cb) {
  db.ref("/LagoUser/").once("value", function(snapshot) {
    cb(null, snapshot.val());
    console.log(snapshot.val());
  });
};

exports.GetRFID = function(rfid, cb) {
  db.ref("LagoUser/" + rfid).once("value", function(snapshot) {
    cb(null, snapshot.val());
    console.log(snapshot.val());
  });
};

exports.AddFirebase = function(rfid, name, balance, points, cb) {
  db.ref("/LagoUser/" + rfid).set(
    {
      Name: name,
      Balance: balance,
      Points: points
    },
    function(error) {
      if (error) {
        cb("Error");
      } else {
        cb(null);
        console.log("Add Success!");
      }
    }
  );
};

exports.UpdateBalance = function(rfid, balance, cb) {
  db.ref("/LagoUser/" + rfid).update(
    {
      Balance: balance
    },
    function(error) {
      if (error) {
        cb("Error");
      } else {
        cb(null);
        console.log("Update Success");
      }
    }
  );
};

exports.UpdatePointsBalance = function(rfid, balance, points, cb) {
  db.ref("/LagoUser/" + rfid).update(
    {
      Balance: balance,
      Points: points
    },
    function(error) {
      if (error) {
        cb("Error");
      } else {
        cb(null);
        console.log("Updated Points and Balance!");
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
