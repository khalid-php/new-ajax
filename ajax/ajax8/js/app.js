function helloSay() {
	console.log('i am use in function');
}
helloSay();

const myFun = function () {
	console.log('kkkk');
}
myFun();

const myFun1=()=>{
 console.log('kkeeee')
}
myFun1();

const myFun2 = () =>console.log('irashsad ahamad');
myFun2();

const myFun3 =() =>'he sufiyan';
console.log(myFun3());

const myFun4 = function ()  {
	return 'hi irsad khan';
}
console.log(myFun4());

const myFun5=() => ({msg:'i am khalid'});
console.log(myFun5());

const myFun6 = name => console.log(`hi ${name}`);
myFun6('hussain');

const myFun7 =(firtname,lastname,age) => console.log(` i am ${firtname} ${lastname} ${age}`);
myFun7('nahid','hussain',32);

//map function using
const user = ['jack','mack','maimi','saint'];

// const nameLength = user.map(function(name) {
// 	return name.length;
// });

const nameLength =user.map((name) => {
	return name.length;
})
console.log(nameLength); 


const nameLength1 = user.map(name=>name.length);
console.log(nameLength1);