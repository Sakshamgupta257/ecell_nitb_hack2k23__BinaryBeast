<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Connect to the database
  $conn = mysqli_connect('localhost', 'username', 'password', 'users');

  // Check the connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Get the user's information
  $username = mysqli_real_escape_string($conn, $_POST['username']);
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $password = mysqli_real_escape_string($conn, $_POST['password']);

  // Hash the password
  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

  // Insert the user's information into the database
  $sql = "INSERT INTO users (username, email, password)
          VALUES ('$username', '$email', '$hashedPassword')";

  if (mysqli_query($conn, $sql)) {
    echo "Sign-up successful!";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  // Close the connection
  mysqli_close($conn);
}

?>
<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Connect to the database
  $conn = mysqli_connect('localhost', 'username', 'password', 'users');

  // Check the connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Get the user's information
  $username = mysqli_real_escape_string($conn, $_POST['username']);
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $password = mysqli_real_escape_string($conn, $_POST['password']);

  // Hash the password
  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

  // Insert the user's information into the database
  $sql = "INSERT INTO users (username, email, password)
          VALUES ('$username', '$email', '$hashedPassword')";

  if (mysqli_query($conn, $sql)) {
    echo "Sign-up successful!";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  // Close the connection
  mysqli_close($conn);
}

?>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Connect to the database
  $conn = mysqli_connect('localhost', 'username', 'password', 'users');

  // Check the connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Get the user's information
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $password = mysqli_real_escape_string($conn, $_POST['password']);

  // Retrieve the user's hashed password from the database
  $sql = "SELECT password FROM users WHERE email = '$email'";
  $result = mysqli_query($conn, $sql);
