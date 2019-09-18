import { Component } from "@angular/core";
import { portfolioService } from '../services/portfolio.service';
import errCallBack from 'src/app/config/error/errCallBack';
@Component({
    selector:"portfolio",
    templateUrl:"./portfolio.component.html"
})
export class portfolioComponent{
    private result:any;
    constructor(private _service:portfolioService){}
    ngOnInit(){
        this._service.getPortfolioModuleData()
                     .subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
    };
};