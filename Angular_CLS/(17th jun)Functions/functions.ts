// function fun_one():string{
//     return "data from database soon...!";
// };
// document.write( fun_one +"<br>");
// document.write( fun_one() );

// function fun_one(arg1:string,arg2:string,arg3:string):void{
//     document.write(arg1+"<=>"+arg2+"<=>"+arg3 +"<br>");
// };
// fun_one("Angular8","NodeJS","MySQL");
// fun_one("ReactJS","NodeJS","MongoDB");


// function fun_one():any{
//     return fun_two();
// };

// function fun_two():string{
//     return "data from database soon...!";
// };

// document.write(fun_one());
// function fun_one(arg1:any,arg2:any,arg3:any):void{
//     document.write(arg1+"<=>"+arg2+"<=>"+arg3+"<br>");
// };
// function fun_two():string{
//     return "Angular8";
// };
// function fun_three():string{
//     return "NodeJS";
// };
// function fun_four():string{
//     return "MongoDB";
// };
// fun_one( fun_two(),fun_three(),fun_four() );


// let my_array:Array<any> = [];
// function fun_one():string{
//     return "welcome...!";
// };
// for(let i:number=0;i<5;i++){
//     my_array.push(fun_one());
// };
// my_array.forEach((element,index)=>{
//     document.write(element+"..."+index+"<br>");
// });

// function fun_one():any{
//     return fun_two;
// };
// function fun_two():string{
//     return "data from database soon...!";
// };
// document.write( fun_one()() );


// function fun_one(arg1:Array<any>):void{
//     document.write( arg1[0]() +"<br>"+ arg1[1]() );
// };
// function fun_two():string{
//     return "Hello_1";
// };
// function fun_three():string{
//     return "Hello_2";
// };
// fun_one([fun_two,fun_three]);

let my_array:Array<any> = [];
function fun_one():string{
    return "Hello...!";
};
for(let i:number=0;i<5;i++){
    my_array.push(fun_one);
};
my_array.forEach((element,index)=>{
    document.write(element()+"..."+index +"<br>");
});









