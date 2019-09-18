import { Injectable } from "@angular/core";
@Injectable()
export class authGuard{
    canLoad():boolean{
        return confirm("do you want to enter into module ??");
    };
};