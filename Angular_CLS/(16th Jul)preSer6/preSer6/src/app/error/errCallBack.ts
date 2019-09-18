import { HttpErrorResponse } from "@angular/common/http";
const errCallBack = (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("client side error");
    }else{
        console.log("server side error");
    }
};
export default errCallBack;