import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {
  constructor(private _router:Router) { }
  ngOnInit() {
  }
  clickMe(){
    this._router.navigate(["/page_three",333,'p_three',30000]);
  };
}
