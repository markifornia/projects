<?php  
session_start();

if(isset($_SESSION['username'])) {

    $username = $_SESSION['username'];

    echo "<h1>Welcome ${username}</h1>";
    echo '<a href="/php/traversy-media/php-crash-course-2022/extras/logout.php">Logout</a>';
    
} else {

    echo '<h1>Welcome Guest</h1>';
    echo '<a href="/php/traversy-media/php-crash-course-2022/13_sessions.php">Home</a>';
}
