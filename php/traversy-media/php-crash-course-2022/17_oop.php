<?php

/*

From PHP5 onwards  you can write PHP in either  a procedural or object oriented way. 
OOP consists of classes that can hold
"properties" and "methods". Objects can be 
created from classes..

*/

class User {

    // properties are attributes that belong to a class

    // Access Modifiers: public, private, protected
    // public - can be accessed anywhere
    // private - can only be accessed from inside the class
    // protected - can only be accessed from in sde the class by inheriting the class
    public $name;
    public $email;
    public $password;

    public function __construct($name, $email, $password) {
        $this->name = $name;
        $this->email = $email;
        $this->name = $password;
    }

    // Method is a function that belongs to a class
    public function set_name($name) {
        $this->name = $name;
    }

    public function get_name() {
        return $this->name;
    }

}


// Inheritance
class Employee extends User {

    public function __construct($name, $password, $email, $title) {
        parent::__construct($name, $email, $password);

        $this->title = $title;
    }

    public function get_title() {
        return $this->title;
    }

}

$user1 = new User('Mark', 'mark.matanza@gmail.com', 'helloworld');
$user2 = new User('Brad', 'brad@gmail.com', 'traversy');

// $user1->set_name('Mark');
// $user2->set_name('John');

// echo $user1->get_name();
// echo $user2->get_name();

$employee1 = new Employee('Sara', 'sara@gmail.com', 'helloworld123', 'Manager');

echo $employee1->get_title();
 