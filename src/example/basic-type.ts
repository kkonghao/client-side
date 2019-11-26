let num: number = 123;
let str: string = 'abc';
str = `数值是${num}`;
console.log(str);



let arr: number[];
arr = [5];

let arr2: Array<number>;
let arr3: (string | number)[];

let tuple: [string, number, boolean];
tuple = ['a', 12, true];


enum Role
{
	SUPER_ADMIN=1,
	ADMIN,
	USER
}



console.log(Role.ADMIN);
console.log(Role[1]);


let value: any;
value = 123;
value = 'china';
const consoleText = (Text:string):void =>{
	console.log(Text);
}

consoleText("china");


const infi = () =>
{
	while (true) {
		
	}
}