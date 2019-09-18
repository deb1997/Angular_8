//in general we will implement authenication gurads by using custom services
//import Injectable
import { Injectable } from "@angular/core";
//use Injectable
@Injectable({
    providedIn:'root'
})
//export the class
export class authGuards{
    canActivate():boolean{
        return confirm("do you want to enter into page_one ??");
    };
    canDeactivate():boolean{
        return confirm("do you want to leave page_two ??");
    };
    canActivateChild():boolean{
        return confirm("do you want to enter into child_three ??");
    };
};