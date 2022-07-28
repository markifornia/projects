<?php

// $animals = array('Cat', 'Dog', 'Ducks');

// switch ($animals[array_rand($animals)]) {

//         case 'Cat': 
//             echo 'Meow!';
//             break;
//         case 'Dog': 
//             echo 'Woof!';
//             break;
//         case 'Duck':
//             echo 'Quack!';
//             break;
//         case 'Default':
//             echo 'Unknown animal detected!';

// }

// $speed = '135mph';
// switch($speed) {
//     case '65mph':
//         echo "You're going the speed limit, reponsible driver!";
//         break;
//     case '95mph':
//         echo "Whoa there, slow down, you're way over the speed limit!";
//     case '135mph':
//         echo "Did you forget about your breaks?";
//         break;
//     case '250mph':
//         echo "You must be driving Bugatti";
// }

$species = array('Cat', 'Dog', 'Cow', 'Fly', 'Bee', 'Ant');

// Case grouping
// switch($species[array_rand($species)])  {
//     case 'Cat':
//     case 'Dog':
//     case 'Cow':
//         echo 'We are animals';
//         break;
//     case 'Fly';
//     case 'Bee';
//     case 'Ant';
//         echo 'We are insects!';
//     break;
// }

function getChineseZodiac($year) {
    switch ($year % 12) :
        case 0: return 'Monkey';
        case 1: return 'Rooster';
        case 2: return 'Dog';
        case 3: return 'Boar';
        case 4: return 'Rat';
        case 5: return 'Ox';
        case 6: return 'Tiger';
        case 7: return 'Rabbit';
        case 8: return 'Dragon';
        case 9: return 'Snake';
        case 10: return 'Horse';
        case 11: return 'Lamb';
    endswitch;
}

echo 1979%12;
echo getChineseZodiac(1979);