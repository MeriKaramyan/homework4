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

4 * pow(4,2)
4 * (4 * pow(4,1))
4 * (4 * 4)

// 4. Write a function that reverses a string with recursion.  Example:  reverse('abcd') should return 'dcba'.  Some things to know about strings:  
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


function drowStars(n) {
	function myStars(n, nSpace, nStars) {
		const nSpace = 0, nStars = n*2-1;

		if (nStars === 0) {
			return;
		}
		const result = "nSpace"*" " + nStars*"*";
		console.log(result);

	};
	myStars();
	
};