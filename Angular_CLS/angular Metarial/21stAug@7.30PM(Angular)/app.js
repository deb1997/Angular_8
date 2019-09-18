// namespace UITechnologies{
//     export var sub:string = "Angular8";
// };
// namespace UITechnologies{
//     export function getSub():string{
//         return "Angular8";
//     };
// };
// namespace NareshIT{
//     export namespace UIDept{
//         export class Angular{
//             public getSub(arg1:string):string{
//                 return arg1;
//             };
//         };
//     };
// };
// namespace myNameSpace{
//     export const URL:string = "http://localhost:4200";
//     export function defaultURL():string{
//         return "4200 is the default port no Angular";
//     };
//     export class Mean{
//         public mean():string{
//             return "MEAN Stack Development";
//         };
//     };
//     export interface Mern{
//         (arg1:string):string;
//     };
// };
var namespace1;
(function (namespace1) {
    namespace1.sub = "Angular8";
})(namespace1 || (namespace1 = {}));
;
/// <reference path="Demo1.ts" />
var namespace2;
(function (namespace2) {
    namespace2.sub = namespace1.sub;
})(namespace2 || (namespace2 = {}));
;
// /// <reference path="Demo1.ts" />
// console.log(UITechnologies.sub);
// /// <reference path="Demo1.ts" />
// console.log(UITechnologies.getSub());
// /// <reference path="Demo1.ts"/>
// console.log( new NareshIT.UIDept.Angular().getSub("Angular8") );
// console.log( new NareshIT.UIDept.Angular().getSub("Bye ReactJS"));
// /// <reference path="Demo1.ts"/>
// console.log(myNameSpace.URL);
// console.log(myNameSpace.defaultURL());
// console.log(new myNameSpace.Mean().mean());
// /**********************************************/
// function fun_one(arg1:string):string{
//     return arg1;
// };
// let var_one:myNameSpace.Mern = fun_one;
// console.log( var_one("Good Bye to ReactJS") );
// /***********************************************/
// /***********************************************/
// function fun_two(arg1:string):string{
//     return arg1;
// };
// let var_two:myNameSpace.Mern = fun_two;
// console.log( var_one("Farewell to ReactJS") );
// /************************************************/
/// <reference path="Demo2.ts"/>
console.log(namespace2.sub);
console.log(namespace1.sub);
