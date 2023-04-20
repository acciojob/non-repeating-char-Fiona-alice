//your JS code here. If required.
function nonRepeat(str){
	var output;
var newString="";
	for(let i=0;i<str.length();i++){
		for(let j=i+1;j<str.length();j++){
			if(i!=j && str.charAt(i)!=str.charAt(j)){
				output=str.charAt(i);
			}
		}
		var input=prompt("Enter a string",str);
		nonRepeat(input);
		alert(output);