// function fun_one(arg1:any,arg2?:any,...arg3:any):void{
//     document.write(arg1+"...."+arg2+"...."+arg3.length);
// };
//fun_one("Hello_1");           //Hello_1 undefined 0
//fun_one("Hello_1","Hello_2"); //Hello_1 Hello_2 0
//fun_one("Hello_1","Hello_2","Hello_3");//Hello_1 Hello_2 1
//fun_one(undefined,undefined,"Hello_1"); //undefined undefined 1
//fun_one("Hello_1",this.arg3="Hello_3");   //Hello_1 Hello_3 0


// function fun_one(arg1:string = "Angular8",
//                  arg2:string = "NodeJS",
//                  arg3:string = "MongoDB"):void{
//     document.write(arg1+"..."+arg2+"..."+arg3); 
// };
// //fun_one();            //Angular8...NodeJS...MongoDB
// //fun_one("ReactJS");     //ReactJS...NodeJS...MongoDB
// fun_one(undefined,undefined,"MySQL");  //Angular8...NodeJS...MySQL


// //normal parameters with default parameters
// function fun_one(arg1:string,arg2:string="Hello"):void{
//     document.write(arg1+"..."+arg2);  
// }
// //fun_one("Welcome");  //Welcome...Hello
// //fun_one("Welcome to","ES6");  //Welcome to...ES6
// fun_one(undefined);  //undefined...Hello





//normal parameters , optional parameters and default parameters
// function fun_one(arg1:string,
//                  arg2?:string,
//                  arg3:string="NodeJS"):void{
//     document.write(arg1+"..."+arg2+"..."+arg3);
// };
// //fun_one("Angular8");  //Angular8...undefined...NodeJS
// fun_one(undefined,undefined);  
//                         //undefined...undefined...NodeJS



//normal parameter , optional parameter , default parameter and rest parameter
function fun_one(arg1:any,
                 arg2?:any,
                 arg3:any="Hello_3",
                 ...arg4:any):void{
    document.write(arg1+"..."+
                   arg2+"..."+
                   arg3+"..."+
                   arg4.length);
};
fun_one("Hello_1","Hello_2",undefined,"Hello_4");  
//Hello_1...Hello_2...Hello_3...1































