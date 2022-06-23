<?php

class Game {

  public const break = "\n";
  public $name = '';
  public $price = '';
  public $photo = '';
  public $dir = 'games/';

  function __construct($name, $price, $photo) {
    $this->name = $name;
    $this->price = $price;
    $this->photo = $photo;
    $this->directory = $directory;
  }

  public function get_game() {
    echo $this->name.self::break;
    echo $this->price;
    echo $this->dir.$this->photo;
  }

}

$game = new Game('Dig Dug', '19.99', 'dig-dug.jpg');
$game->get_game();

$game = new Game('Food Fight', '19.99', 'food-fight.jpg');
$game->get_game();

$game = new Game('Joust', '19.99', 'joust.jpg');
$game->get_game();

$game = new Game('Centipede', '19.99', 'centipede.jpg');
$game->get_game();
