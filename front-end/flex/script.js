

// global namespace

'use strict';



window.addEventListener('load', function() {

let button = document.getElementById('home-button');

    window.addEventListener('click', function(e) {
      console.log('clicked');

      e.preventDefault();

    });

});
