<?php

$answer = 13;
$truth = 0;

if ($answer == 42) {
    //echo "The ultimate answer 42<br>";

    if ($truth) { // boolean
        //echo 'You speak the truth';
    } else {
        //echo 'That is a lie!';
    }
} elseif ($answer == 13) {
    //echo "Today is your lucky day!"; 
    if ($truth) { // boolean
        //echo 'You speak the truth';
    } else {
        //echo 'That is a lie!';
    }      
} else {
    //echo "You don't have life figured out yet! Keep trying!";
}

// Ternary operator
// is this true ? Yes : No

$are_you_okay = true;
$message = $are_you_okay ? "Yeah I'm good" : "Leave me alone!";

echo $message;

?>
<!DOCTYPE html>
<head>
    <title>Ternary</title>    
</head>
<body>

    <?php 
    $condition = 1;
    if ($condition): ?>
    hello
    <?php elseif ($condition): ?>
        
    <?php else: ?>

    <?php endif; ?>    

</body>
</html>

