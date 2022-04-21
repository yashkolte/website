// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAH8lXgyoNbCAoYBWS5_j1Xu77xx35M_Bo",
  authDomain: "contactform-95071.firebaseapp.com",
  databaseURL: "https://contactform-95071-default-rtdb.firebaseio.com",
  projectId: "contactform-95071",
  storageBucket: "contactform-95071.appspot.com",
  messagingSenderId: "272185260364",
  appId: "1:272185260364:web:757ee7d1f2f7346b3bb7e9",
  measurementId: "G-ETENTQT2VC"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}
