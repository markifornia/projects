<?php
/* -------- Sessions ---------*/

/*
    Sessions are a way to store information (in variables) to be used across multiple pages.

    Unlike cookies, sessions are stored on the server.

*/
session_start();

if (isset($_POST['submit'])) {
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_SPECIAL_CHARS);

    $password = $_POST['password'];

    if($username == 'Mark' && $password = 'Matanza') {
        $_SESSION['username'] = $username;
        header("Location: /php/traversy-media/php-crash-course-2022/extras/dashboard.php");
    } else {
        echo 'Incorrect Login';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>SESSIONS</title>
</head>
<body>

    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
    <div>
        <label for="username">Username: </label>
        <input type="text" name="username">
    </div>
    <div>
        <label for="age">Password: </label>
        <input type="password" name="password">
    </div> 
    <div>
        <input type="submit" name="submit" value="Submit">
    </div>        
    </form>
  
</body>
</html>




