// class class_one{
//     readonly sub:string;
//     constructor(arg1:string){
//         this.sub = arg1;
//     };
//     public mySub():string{
//         return this.sub;
//     };
// };
// let obj:class_one = new class_one("Angular8");
// //obj.sub = "Angular9";
// document.write( obj.mySub() );

// class class_one{
//     private wish:string;
//     constructor(private arg1:string){
//         this.wish = arg1;
//     };
// };
// let obj:class_one = new class_one("welcome");
// obj.wish;  //Property 'wish' is private and only accessible within class 'class_one'.

// class class_one{
//     constructor(private arg1:string){
//     };
//     private fun_one():string{
//         return this.arg1;
//     };
//     public fun_two():string{
//         return this.fun_one();
//     };
// };
// let obj:class_one = new class_one("Angular8");
// document.write( obj.fun_two() );


// class class_one{
//     private fun_one():string{
//         return "Hello";
//     };
// };
// class class_two extends class_one{

// };
// //private members won't visible to child classes


// class class_one{
//     private constructor(){}
// }
// let obj:class_one = new class_one();
// //for private constructor we can't create the instances


// class class_one{
//     var_one:string;
//     private constructor(){}
//     static myFun():any{
//         return new class_one();
//     };
// };
// let obj:class_one = class_one.myFun();
// obj.var_one = "Hello";
// document.write( obj.var_one );


class class_one{
    constructor(private arg1:string){}
    private fun_one():string{
        return this.arg1;
    };
    protected fun_two():string{
        return this.fun_one();
    };
};
class class_two extends class_one{
    public fun_three():string{
        return this.fun_two();
    };
};
let obj:class_two = new class_two("Hello");
document.write( obj.fun_three() );










