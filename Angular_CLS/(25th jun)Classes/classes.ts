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



class class_one{
    public sub_one:string = "Angular8";
    public fun_one():string{
        return "MEAN Stack...!";
    };
};

class class_two extends class_one{
    public sub_two:string = "NodeJS";
    public fun_two():string{
        return "MERN Stack...!";
    };
};

class class_three extends class_two{
    public sub_three:string = "CassandraDB";
    public fun_three():string{
        return "MEVN Stack...!";
    };
};

let obj1:class_one = new class_one();
document.write( obj1.sub_one+"<br>"+obj1.fun_one() +"<br>");

document.write("<hr>");

let obj2:class_two = new class_two();
document.write( obj2.sub_one + "<br>" + obj2.sub_two +"<br>" + obj2.fun_one() + "<br>" + obj2.fun_two() +"<br>");

document.write("<hr>");

let obj3:class_three = new class_three();
document.write( obj3.sub_one+"<br>"+
                obj3.sub_two+"<br>"+
                obj3.sub_three +"<br>"+
                obj3.fun_one() +"<br>" +
                obj3.fun_two()+"<br>"+
                obj3.fun_three());















