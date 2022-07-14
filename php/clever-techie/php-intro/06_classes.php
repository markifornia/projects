<?php 

class Game {

    public $price; 
    public $name;
    public $photo;
    public $dir = 'games/';

    public function __contruct($price, $name, $photo) {
        $this->price = $price;
        $this->name = $name; 
        $this->photo = $photo;
    }

    public function print_game() {
        echo $this->name;
        echo $this->price;
        echo $this->dir.$this->photo;
    }

}

$game = new Game();
$game->name = 'Bioshock Infinite';
$game->price = 14.99;
$game->photo = 'bioshock-infinite.jpg';

$game->print_game();