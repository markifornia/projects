<?php 

if(isset($_POST['submit'])) {

    // echo $_POST['name'];
    // echo $_POST['age'];

    // prevent brute force scripting attacks
    // using htmlspecialchars()
    // $name =  htmlspecialchars($_POST['name']);
    // $age =  htmlspecialchars($_POST['age']);

    // using filter_input()
    // $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    // $age = filter_input(INPUT_POST, 'age', FILTER_SANITIZE_SPECIAL_CHARS);

    // user filter_var()
    $name = filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS);
    $age = filter_var($_POST['age'], FILTER_SANITIZE_SPECIAL_CHARS);

    echo $name;
    echo "<br>";
    echo $age;

}

?>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
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