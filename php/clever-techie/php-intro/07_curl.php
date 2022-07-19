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

$curl = curl_init(); // curl is going to be daa type curl resource
curl_setopt($curl, CURLOPT_URL, 'https://www.amazon.com');
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_exec($curl);