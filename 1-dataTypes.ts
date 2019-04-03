let a: number = 10;
console.log(a);

let b: string =  "Hello";
console.log(b);

let c: boolean = true;
console.log(c);

let d: any = "any";
console.log(d);

let e: number[] = [1, 3, 99];
console.log(e);

let f: any[] = [33, "ahmed", true];
console.log(f);

enum Color {red, green, blue}
let bgColor = Color.blue;
console.log(bgColor);

enum Color2 {red = 1, green = 2, blue = 3}
let bgColor2 = Color2.blue;
console.log(bgColor2);


// Type Assrtions.
let message;
message = 'abc';

let endWithC = (<string>message).endsWith('c');
let endWithC2 = (message as string).endsWith('c');