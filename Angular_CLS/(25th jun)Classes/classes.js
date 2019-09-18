// class class_one{
//     private sub_one:string;
//     private sub_two:string;
//     private sub_three:string;
//     constructor(){
//         this.sub_one = "Angular8";
//         this.sub_two = "NodeJS";
//         this.sub_three = "MongoDB";
//     };
//     public getSubOne():string{
//         return this.sub_one;
//     };
//     public getSubTwo():string{
//         return this.sub_two;
//     };
//     public getSubThree():string{
//         return this.sub_three;
//     };
// };
// let obj:class_one = new class_one();
// document.write( obj.getSubOne() +"<br>"+
//                 obj.getSubTwo() +"<br>"+
//                 obj.getSubThree());
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
//     private db:string;
//     constructor(private arg1:string){
//         this.db = arg1;
//     };
//     public getDB():string{
//         return this.db;
//     };
// };
// let obj:class_one = new class_one("MEAN");
// document.write(obj.getDB()+"<br>");
// let obj1:class_one = new class_one("MERN");
// document.write( obj1.getDB() +"<br>");
// let obj2:class_one = new class_one("MEVN");
// document.write( obj2.getDB() );
// class class_one{
//     public myFun():any{
//         return new class_two();
//     };
// };
// class class_two{
//     public myFun():string{
//         return "relation between two classes";
//     };
// };
// document.write( new class_one().myFun().myFun() );
// class class_one{
//     private var_one:class_two;
//     constructor(private obj:class_two){
//         this.var_one = obj;
//     };
//     public myFun():string{
//         return this.var_one.myFun();
//     };
// };
// class class_two{
//     public myFun():string{
//         return "Welcome to Classes...!";
//     };
// };
// let obj:class_one = new class_one( new class_two() );
// document.write( obj.myFun() );
// class class_one{
//     public fun_one():string{
//         return "i am from class_one !!!";
//     };
// };
// class class_two extends class_one{
//     public fun_two():string{
//         return "i am from class two !!!";
//     };
// };
// let obj:class_two = new class_two();
// document.write( obj.fun_one() +"<br>" + obj.fun_two());
var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = "Angular8";
    }
    class_one.prototype.fun_one = function () {
        return "MEAN Stack...!";
    };
    ;
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sub_two = "NodeJS";
        return _this;
    }
    class_two.prototype.fun_two = function () {
        return "MERN Stack...!";
    };
    ;
    return class_two;
}(class_one));
;
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sub_three = "CassandraDB";
        return _this;
    }
    class_three.prototype.fun_three = function () {
        return "MEVN Stack...!";
    };
    ;
    return class_three;
}(class_two));
;
var obj1 = new class_one();
document.write(obj1.sub_one + "<br>" + obj1.fun_one() + "<br>");
document.write("<hr>");
var obj2 = new class_two();
document.write(obj2.sub_one + "<br>" + obj2.sub_two + "<br>" + obj2.fun_one() + "<br>" + obj2.fun_two() + "<br>");
document.write("<hr>");
var obj3 = new class_three();
document.write(obj3.sub_one + "<br>" +
    obj3.sub_two + "<br>" +
    obj3.sub_three + "<br>" +
    obj3.fun_one() + "<br>" +
    obj3.fun_two() + "<br>" +
    obj3.fun_three());
