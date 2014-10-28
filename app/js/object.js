if (typeof NS == 'undefined') { NS = {}; }

NS.myFunction = {
    //empty stuff array, filled during initialization
    stuff: [],

    /**
     * Description
     * @method init
     * @return 
     */
    init: function init() {
        this.stuff.push('Testing');
    },
    /**
     * Description
     * @method reset
     * @return 
     */
    reset: function reset() {
        this.stuff = [];
    },
    //will add new functionality here later
};

NS.myFunction.init();