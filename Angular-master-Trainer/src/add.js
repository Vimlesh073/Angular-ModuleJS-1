function add(){
    //console.log("Arguments are ",arguments.length);
    var sum = 0;
    for(let i = 0; i<arguments.length; i++){
    if(typeof arguments[i]==="function"){
    arguments[i] = arguments[i]();
    }
    if(arguments[i] instanceof Array){
        var tempSum = 0;
        for(let j = 0; j<arguments[i].length; j++){
           tempSum+=isNaN(parseInt(arguments[i][j]))?0:parseInt(arguments[i][j]);;  	
    }
    arguments[i]=tempSum;
    }
    sum +=isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);
    }
    return sum;
    }