<?php
/**
* A simple pet base class
*/

class Pet {


  function __construct($type) {
    $this->type = $type;
  }

  function getPet() {
    return $this->type;
  }

  function bark() {
    return 'Ruff Ruff!!!';
  }

}

$newPet = new Pet('Dog');
echo 'I am a ' . $newPet->getPet() . "\n";

echo 'I make this sound ' . $newPet->bark();
