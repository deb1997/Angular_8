import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'childone',
  templateUrl: './childone.component.html',
  styles: []
})
export class ChildoneComponent implements OnInit {
  private var_four:string;
  constructor() { 
    this.var_four = "i am from child one !!!";
  }
  ngOnInit() {
  }
}
