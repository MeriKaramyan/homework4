// Use recursion to create a function called 'triangleStars' 
// that prints an upside-down triangle to the console of the given height.

function forStars(n){
   if(n <= 0){
    return'';
   }
   return '*' + forStars(n-1);
  };
function forSpaces(n){
   if(n <= 0){
    return'';
   }
   return ' ' + forSpaces(n-1);
  };

   
function plusFunc(spaceCount, starCount, n){
   if (n===0){
    return;
   }
   console.log(forSpaces(spaceCount)+forStars(starCount));
   plusFunc(spaceCount+1, starCount-2, n-1);
   
  };
function printTriangle(n) {
   plusFunc(0, n*2-1, n);
  };

  printTriangle(13);





// Create a function called pow which takes two arguments, base and n.  
// It should than return the result of multiplying the base times itself n 
// time (that is to say, return base to the power of n).  
// Example: pow(2, 3) should return 8.  Remember that your function 
// should work with any two positive integers greater than 1.

function pow(base, n) {
  if (n === 1) {
    return base;
  } else {
    return base * pow(base, n - 1);
  }
};

pow(4,3)

// This function works by this logic:
// 4 * pow(4,2) 
// 4 * (4 * pow(4,1))
// 4 * (4 * 4)





//  Write a function that reverses a string with recursion.  Example:  reverse('abcd') should return 'dcba'.  Some things to know about strings:  
//    -.length will give you the length of the string.  Example: 'abc'.length returns 3
//    -You can access any character of a string using brackets: 'abcde'[2] returns 'c'.
//      Note that indexes begin with 0.  So 'abcde'[0] will return 'a'

function reverse(str) {
    if (str.length === 0) {
        return "";
    }

    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
};

reverse("Meri");


// This function works by this logic:

// i + reverse("Mer")
// i + (r + reverse("Me"))
// i + (r + (e + reverse("M")))
// i + (r + (e + (M + reverse(""))))
// i + r + e + M + ""
// ireM





// Create a function called checkerboard using recursion which, 
// given a size argument, will draw an n by n checkerboard on the screen

function checkerBoard(size) {
    function repeat(string, n){
      if(n <= 0) {
       return ''; 
      }
      return string + repeat(string, n - 1);
    };
    
    function rows(size, row) {
      if(row > size) {
        return;
      }
      if(row % 2 === 0) {
        console.log(repeat(' *', size));
      }
      else{
        console.log(repeat('* ', size)); 
      }
      rows(size, row + 1);
    };

    rows(size, 1);
  };
  
  checkerBoard(13);