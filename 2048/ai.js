(function() {
    var pos = 0;

    window.AI = function(current_grid) {
        // current_grid is the state of the game when the AI starts
        // this will not always be empty

        var last_grid="";

        this.move = function(current_grid) {
            pos = Math.floor(Math.random()*2);
            return pos; //return a random number LOL
        };
    }
})();
