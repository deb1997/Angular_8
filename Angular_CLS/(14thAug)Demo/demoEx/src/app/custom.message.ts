import { Pipe } from "@angular/core";
@Pipe({
    name:"customMsg"
})
export class customMsgPipe{
    transform(arg1:any,arg2:any,arg3:any){
        return arg3+" "+arg2+" "+arg1;
    }
};