// class class_one{}
// class class_two{}
// class class_three extends class_one,class_two{}

//Polymorphism
//behaves like many called as Polymorphism
//in polymorphism we have two forms 1) function overloading   2) function overriding
//same function with different signatures called as function overloading
//we can implement function overloading without inheritance
//overriding the functionality of parent class  by using child class functions called as function overriding
//to implement function overriding we need inheritance

// class class_one{
//     public add(num1:number,num2:number):number{
//         return num1+num2;
//     };
//     public add(num1:number,num2:number,num3:number):number{
//         return num1+num2+num3;
//     };
// };


// class class_one{
//     public dbFun():string{
//         return "mysql data soon...!";
//     };
// };
// class class_two extends class_one{
//     public dbFun():string{
//         return "mongodb data soon...!";
//     };
// };
// let obj:class_two = new class_two();
// document.write( obj.dbFun() );  //mongodb data soon...!



//interfaces
//if we know only declaration, but we don't know implementations then we will choose interfaces.
//implementation provided by 3rd party vendors
//3rd party vendors are may be 1) json or 2) classes
//we will declare interfaces by using "interface" keyword.
//we will implement interfaces by using "implements" keyword
//interfaces are optional in TypeScript.
// interface myInterface{
//     wish:string;
// };
// let obj:myInterface = {
//     wish : "welcome to interfaces"
// };
// document.write( obj.wish );

// interface myInterface{
//     sub_one:string;
//     getSubOne():string;
// };
// class class_one implements myInterface{
//     sub_one:string;
//     constructor(){
//         this.sub_one = "Angular8";
//     };
//     getSubOne():string{
//         return this.sub_one;
//     };
// };
// let obj:class_one = new class_one();
// document.write( obj.sub_one +"<br>"+obj.getSubOne() +"<br>");


// interface myInterface{
//     sub_one:string;
//     sub_two:string;
//     sub_three:string;
// };
// let obj:myInterface = {
//     sub_one : "Angular8",
//     sub_two : "NodeJS",
//     sub_three : "MongoDB"
// };
// class class_one implements myInterface{
//     sub_one:string;
//     sub_two:string;
//     sub_three:string;
//     constructor(){
//         this.sub_one = "ReactJS";
//         this.sub_two = "NodeJS";
//         this.sub_three = "MongoDB";
//     };
// };
// document.write( obj.sub_one+"<=>"+obj.sub_two+"<=>"+obj.sub_three+"<br>");
// let obj1:class_one = new class_one();
// document.write(obj1.sub_one+"<=>"+obj1.sub_two+"<=>"+obj1.sub_three+"<br>");




interface interface1{
    mySQLData():string;
};
interface interface2{
    mongodbData():string;
};
interface interface3 extends interface1,interface2{
    sqlServerData():string;
}; 
let obj:interface3 = {
    mySQLData : ():string=>{ return "MySQL" },
    mongodbData : ():string=>{ return "MongoDB" },
    sqlServerData : ():string=>{ return "SQLServer" }
};
document.write(obj.mySQLData() +"<br>" +
               obj.mongodbData() +"<br>"+
               obj.sqlServerData());















































