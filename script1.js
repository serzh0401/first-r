let str = "ZpglnRxqenU";
let arr = [];
for(i = 0; i < str.length; i ++){
arr.push(str[i].toUpperCase() + str[i].repeat(i).toLowerCase())
}
console.log(arr);
let resalt = arr.join("-");
console.log(resalt);


function accum(s) {
	let arr = [];
for(i = 0; i < s.length; i ++){
arr.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase())
}
let resalt = arr.join("-");
return(resalt);
}