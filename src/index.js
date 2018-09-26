module.exports = function solveEquation(equation) {
    
    
    var arr = [];
    
    var string = equation;
    
    //var string = "-20 * x^2 - 108797540 * x - 130011773690520";
    
  //var string = "2 * x^2 - 10 * x - 12";
    
   // var string = "479 * x^2 + 301133888 * x - 5544914841268791";
    //
    
    var goSplit = string.split(" "); 
    
    /*  goSplit[0] -20
        goSplit[1]  *
        goSplit[2]  x^2
        goSplit[3]  -
        goSplit[4]  108797540
        goSplit[5]  *
        goSplit[6]  x
        goSplit[7]  -
        goSplit[8]  130011773690520

    */
    
    var goSplit8_minys_plus = goSplit[7]+goSplit[8];
   
    

    var disciminant = Math.pow(goSplit[4], 2) - 4 * goSplit[0] * goSplit8_minys_plus; // true
    

//console.log(disciminant);
    
    if (goSplit[4] > 0) {
    
     var goSplit4 = -goSplit[4];
    }  else {

    var goSplit4 =  goSplit[4];

    }
 
            
    var x1 = (goSplit4 + Math.sqrt(disciminant) )/ (2 * goSplit[0]);

    //console.log(x1);
    
    var x2 = (goSplit4 - Math.sqrt(disciminant) )/ (2 * goSplit[0]);

    //console.log(x2);
      //console.log(x1);      
        
//Math.floor(x1)
    //console.log(arr);    
        
    arr.push(x2,x1);
    
        return arr;
        
        
    
}
