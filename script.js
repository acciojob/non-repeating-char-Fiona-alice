//your JS code here. If required.
var str=prompt("Enter a string");
let splitedArr=str.split("");
console.log(splitedArr);
var newEle="";
var i=0;
for (let i = 0; i < splitedArr.length; i++) {
	for (let j = 0; j < splitedArr.length; j++){
		if(splitedArr[i]==splitedArr[j]&&i!=j){
			console.log(splitedArr[j]);
			break;
		}else{
			newEle=splitedArr[j]
		}
		}
	}
alert(newEle);