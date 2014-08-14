(function() {
    var pos = 0;

    window.AI = function(current_grid) {
        // current_grid is the state of the game when the AI starts
        // this will not always be empty

        var last_grid="";

        this.move = function(current_grid) {
            // We need to return UP, LEFT, DOWN, or RIGHT


            if (current_grid) { // Check if current grid is NOT undefined

                console.log(current_grid); //See the current state of the board

                console.log(current_grid[0]); //See the value of the first row

                pos = 0;
                if (last_grid) console.log(last_grid[2][3]); //See the value of the third row, last column

                if (last_grid === current_grid) { //Let's compare if the objects are the same - note that there is three equal signs (=)

                    pos = Math.floor(Math.random()*4);//do something if the grid hasn't changed
                }

                last_grid = current_grid; //store the current grid for the next iteration
            }
            pos = Math.floor(Math.random()*2);
            return pos; //return a random number LOL
        };
    }
})();
