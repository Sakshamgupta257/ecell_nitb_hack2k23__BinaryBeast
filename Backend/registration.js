// Create an object to store users' information
let users = [
    {
      email: "user1@example.com",
      password: "pass123"
    },
    {
      email: "user2@example.com",
      password: "pass456"
    },
    {
        email:"Mohit",
        password:"mohit2003"
    }
  ];
  
  function signUp(email, password) {
    // existing user
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return "Email is already in use";
    } else {
      // Add the new user to the users array
      let newUser = {
        email: email,
        password: password
      };
      users.push(newUser);
      return "Sign up successful";
    }
  }
  
  // Function to sign in
  function signIn(email, password) {
    let existingUser = users.find(user => user.email === email);
    if (!existingUser) {
      return "Email not found";
    } else {
        
      if (existingUser.password === password) {
        return "Sign in successful";
      } else {
        alert("Incorrect password");
      }
    }
  }

  
  // Example usage
  console.log(signUp("user3@example.com", "pass789"));
  console.log(signIn("user3@example.com", "pass789"));
  console.log(signIn("Mohit", "mohit2003"));
  
