$(document).ready( function() {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCV4I2xFRttnKS51GJWc7NzeeyMf1fqpvc",
    authDomain: "trains-65d36.firebaseapp.com",
    databaseURL: "https://trains-65d36.firebaseio.com",
    storageBucket: "trains-65d36.appspot.com",
    messagingSenderId: "86696900845"
  };
  firebase.initializeApp(config);

    var dataRef = firebase.database();

    // Initial Values

      name = "";

      destination = "";

      frequency = 0;

    // Capture Button Click

    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // YOUR TASK!!!

      // Code in the logic for storing and retrieving the most recent user.
      

      // Dont forget to provide initial data to your Firebase database.

      name = $("#train-input").val().trim();

      destination = $("#dest-input").val().trim();

      frequency = $("#freq-input").val().trim();

      // comment = $("#comment-input").val().trim();

      // Code for the push

      dataRef.ref().push({

        name: name,

        destination: destination,

        frequency: frequency,
        
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")

    dataRef.ref().on("child_added", function(snapshot) {

      // Log everything that's coming out of snapshot

      console.log(snapshot.val());

      // console.log(snapshot.val().name);

      // console.log(snapshot.val().email);

      // console.log(snapshot.val().age);

      // console.log(snapshot.val().comment);

      //instantiate it with the snapshot value....
      var name = snapshot.val().name;
      var destination = snapshot.val().destination;
      var frequency = snapshot.val().frequency;
      

      // Change the HTML to reflect

      // $("#name-display").html(snapshot.val().name);

      // $("#email-display").html(snapshot.val().email);

      // $("#age-display").html(snapshot.val().age);

      // $("#comment-display").html(snapshot.val().comment);

      $("#recent-table > tbody").append("<tr><td>" + name +
       "</td><td>" + destination +
        "</td><td>" + frequency +
         "</td></tr>");

    // Handle the errors

    }, function(errorObject) {

      console.log("Errors handled: " + errorObject.code);

    });

  });