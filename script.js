// Initialize Firebase
var firebaseConfig = {
  // ... (your Firebase configuration here)
};
firebase.initializeApp(firebaseConfig);

// Custom JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const myButton = document.getElementById("myButton");
  const myParagraph = document.getElementById("myParagraph");

  // Reference to your Firebase Realtime Database
  const dbRef = firebase.database().ref("message");

  myButton.addEventListener("click", function() {
    myParagraph.innerHTML = "Updating Firebase...";
    
    // Update the message in Firebase
    dbRef.set("Hello, Firebase!").then(() => {
      myParagraph.innerHTML = "Firebase updated successfully!";
    }).catch((error) => {
      myParagraph.innerHTML = "Failed to update Firebase.";
    });
  });

  // Listen for changes in Firebase
  dbRef.on("value", function(snapshot) {
    const message = snapshot.val();
    if (message) {
      myParagraph.innerHTML = `Firebase says: ${message}`;
    }
  });
});
