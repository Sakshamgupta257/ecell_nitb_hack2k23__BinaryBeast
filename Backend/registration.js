const users = [];

function signUp(email, password) {
    const user = {
      email: email,
      password: password
    };
    users.push(user);
    console.log("User signed up successfully");
  }

  function signIn(email, password) {
    for (const user of users) {
      if (user.email === email && user.password === password) {
        console.log("User signed in successfully");
        return;
      }
    }
    console.log("Sign in failed: Invalid email or password");
  }

signUp("john.doe@example.com", "password123");
signIn("john.doe@example.com", "password23");
