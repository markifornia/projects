<?php

/* ---------- File Handling ----------- */

/*

File handling is the ability to read and write files to the server.

PHP has built in functions for reading and writing files.

*/

$file = 'extras/users.txt';

// Check if exists
if (file_exists($file)) {
    // only reads file
    // echo readfile($file);

    $handle = fopen($file, 'r');
    $contents = fread($handle, filesize($file));
    fclose($handle);
    echo $contents;

} else {
    $handle = fopen($file, 'w');
    $contents = 'Mark' . PHP_EOL . 'Sara' . PHP_EOL . 'Mike';
    fwrite($handle, $contents);
    echo $contents;
}