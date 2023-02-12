// Create an object to store users' information
let users = [
    {
      email: "user1@example.com",
      pass: "pass123"
    },
    {
      email: "user2@example.com",
      pass: "pass456"
    },
    {
        email:"Mohit",
        pass:"mohit2003"
    }
  ];

  const email = document.getElementById("emailInput");
  const pass = document.getElementById("passInput");
  const submit = document.getElementById("Login-Btn");


  // Function to sign in
  function signIn(email, pass) {
    let existingUser = users.find(user => user.email === email);
    if (!existingUser) {
      return "Email not found";
    } else {
        
      if (existingUser.pass === pass) {
        return "Sign in successful";
      } else {
        alert("Incorrect pass");
      }
    }
  }



  
  
