/*
Take the contents of the sonnet div and place it in a variable. - 
Find and output the starting position of the word "orphans". - string method get index of
Output the number of characters in the sonnet.
Replace the first occurance of the string "winter" with "yuletide".
Replace all occurances of the string "the" with "a large".
Set the content of the sonnet div with the new string.
*/

var sSonnet = document.getElementById("sonnet").innerText;

function myIndex(){
	var index = sSonnet.indexOf("orphans");
	console.log(index);
	
	var length = sSonnet.length;
	console.log(length);

	var winSwitch = sSonnet.replace("winter", "yuletide").replace(/" the "/g, " a large ");
			document.getElementById("sonnet").innerHTML = winSwitch;
}
myIndex();

