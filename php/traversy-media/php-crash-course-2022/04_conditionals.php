<?php
// Conditionals / Control Structures 

/*

< Less than
> Greather than
<= Less than or equal to
>= Greater than or equal to
== Equal to
=== Strict Equal to (Identical)
!= Not equal to
!== Strict NOT equal to (Identical)

*/

/* ----------- If Statements ----------- */
/* If Statement syntax 

if (condition) {
    // code to be executed if condition is true
}

*/

$age = 17;

/*
if($age >= 18) {
    echo 'You are old enough to vote';
} else {
    echo 'Sorry you are not old enough to vote';
}
*/

$t = date("H");
// echo $t;

/*
if ($t < 12) {
    echo 'Good Morning';
} elseif($t < 17) {
    echo 'Good Afternoon';
} else {
    echo 'Good Evening';
}
*/

$posts = ['First Post'];

// empty function

/*
if (!empty($posts)) {
    echo $posts[0];
} else {
    echo 'no post';
}
*/

// Ternary operators

//echo !empty($posts) ? $posts[0]: 'No post';

$first_post = !empty($posts) ? $posts[0]: 'No post';

//echo $first_post;

//$first_post = !empty($posts) ? $posts[0]: null;

// no else, use coalesce PHP 7

$first_post = $posts[0] ?? null;

//echo $first_post;

// Switches, a bunch of elseifs

$fav_color = 'red';

switch($fav_color) {

    case 'red':
        echo 'your favorite color is red';
        break;

    case 'blue':
        echo 'your favorite color is blue';
        break;

    case 'yellow':
        echo 'your favorite color is yellow';
        break;

    case 'default':
        echo 'Your favorite color is not red, green or yellow';
}















