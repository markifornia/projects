<?php
/* -------- $_GET & $_POST Superglobals -------- */

/*

We can pass data through urls and forms using the $_GET and $_POST superglobals

*/

if(isset($_POST['submit'])) {

    echo $_POST['name'];
    echo $_POST['age'];

}

?>

<a href="<?php echo $_SERVER['PHP_SELF']; ?>?name=Mark&age=42">Click</a>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <div>
        <label for="name">Name: </label>
        <input type="text" name="name">
    </div>
    <div>
        <label for="age">Age: </label>
        <input type="text" name="age">
    </div> 
    <div>
        <input type="submit" name="submit" value="Submit">
    </div>        
</form>