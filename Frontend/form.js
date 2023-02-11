
  document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const userData = { name, email };
    console.log(JSON.stringify(userData));
    
  });
