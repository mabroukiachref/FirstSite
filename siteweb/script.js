// app.js

const inquiryForm = document.getElementById('inquiryForm');

inquiryForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Store form data in Firestore
    db.collection("inquiries").add({
        name: name,
        email: email,
        phone: phone,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Your inquiry has been submitted successfully!");
        inquiryForm.reset(); // Reset form after submission
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("An error occurred. Please try again later.");
    });
});
