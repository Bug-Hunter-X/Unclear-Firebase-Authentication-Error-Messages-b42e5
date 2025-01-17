function authenticateUser(credential) {
  firebase.auth().signInWithCredential(credential)
    .then((userCredential) => {
      // Successful authentication
      console.log("User signed in successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Improved error handling
      if (errorCode === 'auth/invalid-credential') {
        console.error('Invalid credentials provided:', errorMessage);
      } else if (errorCode === 'auth/network-request-failed') {
        console.error('Network request failed:', errorMessage);
        // Consider retrying or displaying a user-friendly message
      } else {
        console.error('Authentication failed:', errorCode, errorMessage);
      }
    });
} 