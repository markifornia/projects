<?php

/*
* Files in game directory
*
* braveheart(1995).jpg
* gladiator(2000).jpg
* hotel_transylvania(2021).jpg
* kung_fu_panda_2_(2011).jpg
* terminator_2_-_judgement_day(1991).jpg
* the_hobbit_-_an_unexpected_journey(2012).jpg
* the_matrix(1999).jpg
* the_road(2009).jpg
*/

// directory
$dir = 'movies';
$files = scandir($dir);

// pretty print function
function pre_r($array) {
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}

// pre_r($files);

// Use array_diff to filter out 
// [0] => .
// [1] => ..

$files = array_diff($files, array('..', '.'));

//pre_r($files);

// reset key indexes
// use array_values
$files = array_values($files);

//pre_r($files);

// Create new container array 
// clean up $files array
$movies = array();

for ($i = 0; $i < count($files); $i++) {

    preg_match("!(.*?)\((.*?)\)!", $files[$i], $results);    

    $movie_name = str_replace('_', ' ', $results[1]);
    $movie_name = ucwords($movie_name);

    $movies[$movie_name]['image'] = $files[$i];
    $movies[$movie_name]['year'] = $results[2];

}

// pre_r($movies);

?>
<!DOCTYPE html>
<head>
    <title>Movies Array</title>
    <style>
        body {
            margin: 0;
        }

        span.name {
            font-size: 18px;
            font-weight: bold;
        }

        span.year {
            color: #ccc;
            font-size: 18px;
        }

        td {
            text-align: center;
        }

        img {
            padding: 10px;
        }

        tr.even {
            background-color: #141423;
        }

        tr.odd {
            background-color: #18182b;
        }

        tr.header {
            background-color: #111f4e;
            color: #fff;
            font: bold 11pt Calibri;
        }

        #movies {
            background-color: #000;
            color: #fff;
            font: 11pt Calibiri;
        }

    </style>
</head>
<body>

    <table id="movies" cellpadding="50">
        <tr class="odd">   

            <?php

                foreach($movies as $movie_name => $info) {
                    $content = "<td><span class='name'>$movie_name</span><br>"
                    . "<img src='http://localhost/php/clever-techie/php-intro/movies/$info[image]'><br>"
                    . "<span class='year'>( $info[year] )</span></td>";

                    echo $content;
                }

            ?>

        </tr>
    </table>
</body>

</html>