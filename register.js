import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const registerForm = document.getElementById('register-form');
const registerErrorMessage = document.getElementById('register-error-message');

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User registered:', user);
        alert('Registration successful');
        // Redirect to another page or perform other actions after registration
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error registering user:', errorCode, errorMessage);
        registerErrorMessage.textContent = errorMessage;
    }
});
