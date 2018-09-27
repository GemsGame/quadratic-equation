module.exports = function solveEquation(equation) {
    
    
    var arr = [];
    
    var string = equation;
    

    
    var goSplit = string.split(" "); 
    
    /*  goSplit[0]  135
        goSplit[1]  *
        goSplit[2]  x^2
        goSplit[3]  -
        goSplit[4]  189957825
        goSplit[5]  *
        goSplit[6]  x
        goSplit[7]  -
        goSplit[8]  1191078626098140

    */
    
    var goSplit8_minys_plus = goSplit[7]+goSplit[8];
    var goSplit4_minys_plus = goSplit[3]+goSplit[4];
                                                                 //-+
                                                      //-+
    var disciminant = Math.pow(goSplit[4], 2) - 4 * goSplit[0] * goSplit8_minys_plus; // true
    

//console.log(disciminant);
    
    if (goSplit4_minys_plus < 0) {
    
     var goSplit4 = goSplit[4];
    } 
 
      
     
    if (goSplit4_minys_plus > 0) {
    
     var goSplit4 = -goSplit4_minys_plus;
    } 
    
    

    
    var x1 = (+goSplit4 + Math.sqrt(disciminant) )/ (2 * goSplit[0]);

    
    
    var x2 = (+goSplit4- Math.sqrt(disciminant) )/ (2 * goSplit[0]);

   
        
    arr.push(Math.round(x1),Math.round(x2));
    
    
     if(goSplit[0]>0) {
         
          return arr.reverse();
     }
       
          return arr;
        
    
}
