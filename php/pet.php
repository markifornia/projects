<?php
/**
* A simple pet base class
* 1. Dog
* 2. Cat
* 3. Cow
* 4. Snake
* 5. Lion
* 6. Ape
* 7. Pig
* 8. Bird
* 9. Duck
* 10. Owl
*/

class Pet {


  function __construct($type) {
    $this->type = $type;
  }

  function getPet() {
    return $this->type;
  }

  function makeSound() {
    return 'Ruff Ruff!!!';
  }

}

$newPet = new Pet('Dog');
echo 'I am a ' . $newPet->getPet() . "\n";

echo 'I make this sound ' . $newPet->makeSound();
