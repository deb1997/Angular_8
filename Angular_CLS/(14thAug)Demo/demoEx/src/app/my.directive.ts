import { Directive, ElementRef, HostListener, Input } from "@angular/core";
@Directive({
    selector:"[myDir]"
})
export class myDirective{
    @Input() color_one;
    @Input() color_two;
    constructor(private _el:ElementRef){}
    public hiliteColor(arg1){
        this._el.nativeElement.style.backgroundColor=arg1;
    }
    @HostListener("mouseenter") onmouseenter(){
        this.hiliteColor(this.color_one);
    };
    @HostListener("mouseleave") onmouseleave(){
        this.hiliteColor(this.color_two);
    };
};