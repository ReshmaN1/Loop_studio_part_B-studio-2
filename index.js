//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let str1="1234";
let str2="5678";
let combine = "";
for (let i = 0; i<str1.length;i++) {
   combine = combine+str1[i]+str2[i];
}
console.log(combine);


let code1="ABCDEF";
let code2="notyet";
let combine1 ="";
for (let i = 0; i<code1.length;i++) {
   combine1 = combine1+ code1[i]+code2[i];
}
console.log(combine1);

let ka = "LoOt";
let blam ="oku!"
let combine2="";
for(let i=0;i<ka.length;i++){
  combine2 = combine2+ ka[i]+blam[i];
}
console.log(combine2);