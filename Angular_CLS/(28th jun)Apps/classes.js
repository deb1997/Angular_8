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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var class_one = /** @class */ (function () {
    function class_one(arg1) {
        this.arg1 = arg1;
    }
    class_one.prototype.fun_one = function () {
        return this.arg1;
    };
    ;
    class_one.prototype.fun_two = function () {
        return this.fun_one();
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_three = function () {
        return this.fun_two();
    };
    ;
    return class_two;
}(class_one));
;
var obj = new class_two("Hello");
document.write(obj.fun_three());
