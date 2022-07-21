<?php 

//1) Preferred
"text {$array['name']} more text"; // associative single
"text $array[2] more text" // numeric single
"text $object->name $object->price more text"; // property

//2) Valid alternatives
"text $array[name] more text"; // associative single
"text {array[2]} more text"; // numeric single
"text {$object->name} {$object->price} more text"; // property

//3) The only way
"text {$object->buy()} more text"; // method call
"text {$array['release year']} more text"; // associative single with space
"text {$array[1][3]} more text"; // multi dimensional numeric
"text {$array['random'][3]} more text"; // multi dimensional associative
"text " .add(5, 10)."more text"; // functions
"text ".ANSWER." more text"; // constants

// 4) Invalid
$array[name];  // single associative, outside of double quotes
"text {ANSWER} more text"; // constant
"the value is {add(5, 10)} that's awesome"; // function
"text {$object->name $object->price} more text"; // properties
"text $object->buy() more text"; // method call
"text $array[random][5] more text"; // associative multi
"text {$array[random][5]} more text"; // associative multi
"text $array['release year] more text"; // associative single with space
"text $array[1][3] more text"; // numeric multi
"text {$array{1}{3}} more text"; // numeric multi
"text {$array{actor}} more text"; // associative single