const user = {email:'jayyyuu@gmail.com'}
try {
  null.myFunction();
  // console.log(eval("the evalution"));
  // decodeURIcompoment('%');
  if(!user.name) {
  	// throw 'user has no name';
  	throw new SyntaxError('name as no name');
  }
} catch(e) {
	console.log(e);
  console.log(`SyntaxError :${e.massegw}`);
	// console.log(e.message);
	// console.log(e.name);
	// console.log(e instanceof typeError);
} finally {
  // console.log(e);
	console.log('the runs the programe in continue');
}
 console.log('ganga nath the ');


 //example of regular Expration in java script

 // let reg = /hellow/;
 // let reg = /Hellow/i;//casesensitve
 let reg = /hellow/g;//global
 // console.log(reg);
 // console.log(reg.source);
 // //exec()  array and null
 // const result = reg.exec('khalid hellow india');
 // console.log(result);
 // console.log(result[0]);
 // console.log(result.index);
 // console.log(result.input);

 //text() returns true and false
// const  result = reg.test('hello');
// console.log(result);

//match() -return array or null
 const str =' hhjj 55 hellow math myggggg';
 // const result = str.match(reg);
 // console.log(result);

 //search() - return index is find other wise not found -1

 // const result = str.search(reg);
 // console.log(result);

const result = str.replace(reg,'hi');
console.log(result);