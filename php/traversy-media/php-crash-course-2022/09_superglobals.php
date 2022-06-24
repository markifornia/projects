<?php 
/* -------- Superglobals --------*/

/*

$_GET - contains information about variables passed through a URL or a form

$_POST - contains information about variables passed through a form

$_COOKIE - contains information about variables passed through a cookie

$_SESSION - contains information about variables passed through a session

$_SERVER - contains information about the server environment

$_ENV - contains information about the environment variables

$_FILES - contains information about files uploaded to the script

$_REQUEST - contains information about variables passed hrough the form or URL.

*/

echo '<pre>';
print_r($_SERVER);
echo '</pre>';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PHP Server Variables</title>
</head>
<body>
  
    <ul>
        <li><?php echo $_SERVER['HTTP_HOST']; ?></li>
        <li><?php echo $_SERVER['HTTP_CONNECTION']; ?></li>
        <li><?php echo $_SERVER['HTTP_CACHE_CONTROL']; ?></li>
        <li><?php echo $_SERVER['HTTP_SEC_CH_UA']; ?></li>
        <li><?php echo $_SERVER['HTTP_SEC_CH_UA_MOBILE']; ?></li>
        <li><?php echo $_SERVER['HTTP_SEC_CH_UA_PLATFORM']; ?></li>
        <li><?php echo $_SERVER['HTTP_UPGRADE_INSECURE_REQUESTS']; ?></li>
        <li><?php echo $_SERVER['HTTP_USER_AGENT']; ?></li>
        <li><?php echo $_SERVER['HTTP_ACCEPT']; ?></li>
        <li><?php echo $_SERVER['HTTP_SEC_FETCH_SITE']; ?></li>
        <li><?php echo $_SERVER['HTTP_SEC_FETCH_MODE']; ?></li>
        <li><?php echo $_SERVER['HTTP_SEC_FETCH_USER']; ?></li>
        <li><?php echo $_SERVER['HTTP_SEC_FETCH_DEST']; ?></li>
        <li><?php echo $_SERVER['HTTP_REFERER']; ?></li>
        <li><?php echo $_SERVER['HTTP_ACCEPT_ENCODING']; ?></li>
        <li><?php echo $_SERVER['HTTP_ACCEPT_LANGUAGE']; ?></li>
        <li><?php echo $_SERVER['PATH']; ?></li>
        <li><?php echo $_SERVER['SERVER_SIGNATURE']; ?></li>
        <li><?php echo $_SERVER['SERVER_SOFTWARE']; ?></li>
        <li><?php echo $_SERVER['SERVER_NAME']; ?></li>
        <li><?php echo $_SERVER['SERVER_ADDR']; ?></li>
        <li><?php echo $_SERVER['SERVER_PORT']; ?></li>
        <li><?php echo $_SERVER['REMOTE_ADDR']; ?></li>
        <li><?php echo $_SERVER['DOCUMENT_ROOT']; ?></li>
        <li><?php echo $_SERVER['REQUEST_SCHEME']; ?></li>
        <li><?php echo $_SERVER['CONTEXT_PREFIX']; ?></li>
        <li><?php echo $_SERVER['CONTEXT_DOCUMENT_ROOT']; ?></li>
        <li><?php echo $_SERVER['SERVER_ADMIN']; ?></li> 
        <li><?php echo $_SERVER['SCRIPT_FILENAME']; ?></li>
        <li><?php echo $_SERVER['REMOTE_PORT']; ?></li> 
        <li><?php echo $_SERVER['GATEWAY_INTERFACE']; ?></li>     
        <li><?php echo $_SERVER['SERVER_PROTOCOL']; ?></li>   
        <li><?php echo $_SERVER['REQUEST_METHOD']; ?></li>   
        <li><?php echo $_SERVER['QUERY_STRING']; ?></li>  
        <li><?php echo $_SERVER['REQUEST_URI']; ?></li>   
        <li><?php echo $_SERVER['SCRIPT_NAME']; ?></li>  
        <li><?php echo $_SERVER['PHP_SELF']; ?></li>                                                     <li><?php echo $_SERVER['REQUEST_TIME_FLOAT']; ?></li>   
        <li><?php echo $_SERVER['REQUEST_TIME']; ?></li>         
    </ul>

</body>
</html>