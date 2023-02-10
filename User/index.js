$(document).ready(function() {
    $('#signin-form').submit(function(e) {
      e.preventDefault();
  
      // Get the user's inputs
      var email = $('#email').val();
      var password = $('#password').val();
  
      // Send the inputs to the server using AJAX
      $.ajax({
        type: 'POST',
        url: 'signin.php',
        data: { email: email, password: password },
        success: function(response) {
          // Display the results
          alert(response);
        }
      });
    });
  });
  