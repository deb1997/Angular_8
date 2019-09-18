// abstract class class_one{
//     public fun_one():string{
//         return "i am from fun one !!!";
//     };
//     public abstract fun_two():string;
// };
// class class_two extends class_one{
//     public fun_two():string{
//         return "i am from fun two !!!";
//     };
// };
// let obj:class_two = new class_two();
// document.write( obj.fun_one() +"<br>" +obj.fun_two() );
// abstract class class_one{
//     abstract fun_one():string;
// };
// abstract class class_two extends class_one{
//     abstract fun_two():string;
// };
// abstract class class_three extends class_two{
//     abstract fun_three():string;
// };
// class class_four extends class_three{
//     public fun_one():string{
//         return "i am from fun one !!!";
//     };
//     public fun_two():string{
//         return "i am from fun two !!!";
//     };
//     public fun_three():string{
//         return "i am from fun three !!!";
//     };
// };
// let obj:class_four = new class_four();
// document.write( obj.fun_one() +"<br>" + 
//                 obj.fun_two() +"<br>" + 
//                 obj.fun_three());
// interface interface1{
//     fun_one():string;
// };
// abstract class class_one implements interface1{
//     public fun_one():string{
//         return "i am from interface !!!";
//     };
//     abstract fun_two():string;
// };
// abstract class class_two extends class_one{
//     abstract fun_three():string;
// };
// class class_three extends class_two{
//     public fun_two():string{
//         return "i am from class one !!!";
//     };
//     public fun_three():string{
//         return "i am from class two !!!";
//     };
// };
// let obj:class_three = new class_three();
// document.write(obj.fun_one() +"<br>" + 
//                obj.fun_two() +"<br>" +
//                obj.fun_three());
// class class_one{
//     private sub:string;
//     constructor(arg1:string){
//         this.sub = arg1;
//     };
//     public getSub():string{
//         return this.sub;
//     };
// };
// class class_two extends class_one{
//     constructor(){
//         super("MEAN Stack Developement !!!");
//     };
// };
// let obj:class_two = new class_two();
// document.write( obj.getSub() );
// class class_one{
//     private sub_one:string;
//     private sub_two:string;
//     constructor(arg1:string,arg2:string){
//         this.sub_one = arg1;
//         this.sub_two = arg2;
//     };
//     public getSubjects():string{
//         return this.sub_one+"..."+this.sub_two;
//     };
// };
// class class_two extends class_one{
//     private sub_three:string;
//     constructor(arg1:string,arg2:string,arg3:string){
//         super(arg1,arg2);
//         this.sub_three = arg3;
//     };
//     public meanStack():string{
//         return super.getSubjects()+"..."+this.sub_three;
//     };
// };
// let obj:class_two = new class_two("Angular8",
//                                   "NodeJS",
//                                   "MongoDB");
// document.write( obj.meanStack() );
var class_one = /** @class */ (function () {
    function class_one() {
    }
    // constructor(){
    //     this.wish = "welcome";
    // };
    class_one.myFun = function () {
        return this.wish;
    };
    ;
    class_one.wish = "welcome";
    return class_one;
}());
;
document.write(class_one.wish + "<br>" + class_one.myFun());
// let obj:class_one = new class_one();
// obj.wish
// obj.myFun()
