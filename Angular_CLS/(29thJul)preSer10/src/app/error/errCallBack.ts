import { HttpErrorResponse } from "@angular/common/http";
const errCallBack = (err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
        console.log("client side error");
    }else{
        console.log("server side error");
    }
};
export default errCallBack;