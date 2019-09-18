//import Injectable
//Injectable used to create the Custom Services
import { Injectable } from "@angular/core";
//use Injectable
@Injectable()
//export the class
export class dbService{
    //take the mysqlData() function
    public mySQLData():string{
        return "MySQL Data Soon...!";
    };
    //take the mongodbData() function
    public mongodbData():string{
        return "MongoDB Data Soon...!";
    };
};