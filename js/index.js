
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function writeOutputToDocument( result1) {
    document.getElementById(`output1`).innerHTML += `<li>${result1}</li>`;
  }
  
  function squareNumber(numToSquare){
    return numToSquare **2;
    
  }
  
  let numToSquare = 3;
  
  writeOutputToDocument(`the result of squaring the number ${numToSquare} is ${squareNumber(numToSquare)}.`)
  
  
  
  
  // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
  
  function writeOutput( result2 ) {
    document.getElementById(`output2`).innerHTML += `<li>${result2}</li>`;
  }
  
  function halfNumber(_numToHalf){
    return _numToHalf /2;
    
  }
  
  let _numToHalf = 5;
  
  writeOutput(`the result of half the number ${_numToHalf} is ${halfNumber(_numToHalf)}.`)
  
  
  
  
  
  // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
  
  
  
  
  // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  //      Bonus: Round the result so there are only two digits after the decimal.
  
  function writeOutputToDocument( result ) {
    document.getElementById(`output`).innerHTML += `<li>${result}</li>`;
  }
  
  function areaOfCircle(){
    return  
    
  }
  
  let  = ;
  
  writeOutputToDocument(`the result of squaring the number ${} is ${areaOfCircle()}.`)
  
  
  
  
  // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
  //      1. Take half of the number and store the result.
  //      2. Square the result of #1 and store that result. 
  //      3. Calculate the area of a circle with the result of #2 as the radius.   
  //      4. Calculate what percentage that area is of the squared result (#3).