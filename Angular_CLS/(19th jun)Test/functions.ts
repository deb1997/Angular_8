// function fun_one(...arg1:string[]):void{
//     if(arg1.length !=0 ){
//         arg1.forEach((element)=>{
//             document.write(element);
//         });
//         document.write("<hr>");
//     }
// };
// fun_one();
// fun_one("Angular8");
// fun_one("Angular8","NodeJS");
// fun_one("Angular8","NodeJS","MongoDB");

// function fun_one(arg1:string,...arg2:string[]):void{
//     if(arg1!=undefined){
//         document.write(arg1);
//     }
//     if(arg2[0]!=undefined && arg2.length!=0){
//         arg2.forEach((element)=>{
//             document.write(element);
//         });
//     };
// };
// fun_one(undefined);
// fun_one(undefined,undefined);
// fun_one("Hello_1");
// fun_one(undefined,"Hello_1");


// function fun_one(arg1?:string,
//                  arg2?:string,
//                  arg3?:string):any{
//     if(arg1!=undefined){
//         document.write(arg1);
//     };
//     if(arg2!=undefined){
//         document.write(arg2);
//     };
//     if(arg3!=undefined){
//         document.write(arg3);
//     }
//     document.write("<hr>");
// };
// fun_one();
// fun_one("Angular8");
// fun_one("Angular8","NodeJS");
// fun_one("Angular8",this.arg3="MongoDB");


//comnination of normal with optional
//in combination of normal with optional, always optional should be the last
//we can have more than one optional
// function fun_one(arg1:string,arg2?:string,arg3?:string):void{
//     document.write(arg1+"..."+arg2+"...."+arg3+"<br>");
//     //document.write(arg1);
// };
// //fun_one("Hello");
// //fun_one(undefined);
// //fun_one(this.arg3="Hello");
// //fun_one("Hello_1","Hello_2","Hello_3");
// fun_one("Hello_1",this.arg3="Hello_3");


//combination of optional with rest
// function fun_one(arg1?:string,...arg2:string[]):void{
//     document.write(arg1+"..."+arg2.length);
// };
//fun_one();   //undefined...0
//fun_one("Hello");  //Hello...0
//fun_one("Hello_1","Hello_2");  //Hello_1...1
//fun_one("Hello_1",undefined);   //Hello_1...1
//fun_one("Hello_1",null);   //Hello_1...1


// let array = [1,2,3];
// let array1 = array;
// console.log(array);    //1 2 3
// console.log(array1);   //1 2 3
// array.push(4);
// console.log(array);   //1 2 3 4
// console.log(array1);  //1 2 3 4   if(spread) ans : 1 2 3


//normal , optional and rest














