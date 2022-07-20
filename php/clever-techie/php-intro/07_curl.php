<?php
/*
* 1) Create URL resource
* $curl = curl_init();
*  
* 2) Set cURL options
* curl_setopt($curl, CURLOPT_URL, 'http://www.google.com');
*
* 3) Run cURL (execute http request)
* curl_exec($curl);
*
* 4) Close cURL Resource
* curl_close($curl);
*/

$curl = curl_init(); // curl is going to be data type curl resource

$search_string = "pc video games 2022";
$url = "https://www.amazon.com/s?k=$search_string";

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// store result
$result = curl_exec($curl);

preg_match_all("/https://images-na.ssl-images-amazon.com/images/I/[^\s]*?._AC_USZ160_.jpg/", $result, $matches);

// remove duplicates
$images = array_unique($matces[0]);

// reset keys
$images = array_values($images);

for ($i = 0; $i < count($images); $i++) {
    echo "<div style='float: left; margin: 10 0 0 0; '>";
    echo "<img src='$images[$i]'><br>";
    echo "</div>";
}

// free up resources
curl_close($curl);
