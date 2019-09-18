import { Pipe } from "@angular/core";
@Pipe({
    name:"reverse"
})
export class reversePipe{
    transform(arg1){
        return Array.from(arg1).reverse().join("");
    };
};