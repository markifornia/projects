<?php

class Game {


  public const break = "\n";
  public $name = 'Dig Dug';
  public $price = '14.99';
  public $photo = 'dig-dug.jpg';
  public $dir = 'games/';

  function __construct() {}

  function get_game() {
    echo $this->name.self::break;
    echo $this->price;
    echo $this->dir.$this->photo;
  }

}

$game = new Game();
$game->get_game();
