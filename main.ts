function print(x:number):void {

    for(var j; j<x; j++){
       for(var k=0;k<x-j-1;k++){
            console.log(" ")
        }
            for(var i; i<(2*x-1)+1; i++){
       
        console.log("*");
    }
     console.log("\n");
    }
}


print(3);