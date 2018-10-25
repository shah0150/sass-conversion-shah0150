var MADD = (function(){
    var isReady = false;
    
    document.addEventListener("DOMContentLoaded", function(){
        isReady = true;    
    });
    
    return {
        code: 'MAD9013',
        name: 'Cross-Platform Web Development',
        pageReady: function(){
            console.log("Page Loaded: " + isReady.toString() );
        },
        getDetails: function(){
            console.log(this.code + " : " + this.name);
        }
    }
})();
MADD.pageReady();

setTimeout( function(){ MADD.pageReady(); }, 3000);
