//Directive is the predefined class
//Directive class used to create the Custom Directives
//TemplateRef used to manipulate the DOM Elements
//ViewContainerRef used to add/remove elements from DOM.
import { Directive, 
         TemplateRef, 
         ViewContainerRef, Input } from "@angular/core";
@Directive({
    selector:"[hello]"
})
//export the class
export class helloDirective{
    constructor(private _templateRef:TemplateRef<any>,
                private _viewContainerRef:ViewContainerRef){
        
    }
    
    @Input() set hello(arg1:boolean){   
        if(arg1){
            this._viewContainerRef
                .createEmbeddedView(this._templateRef);
        }else{
            this._viewContainerRef.clear();
        }
    };
};