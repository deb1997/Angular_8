import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'pageone',
  templateUrl: './pageone.component.html',
  styles: []
})
export class PageoneComponent implements OnInit {
  private var_one:string;
  constructor(private _route:ActivatedRoute) { 
    this.var_one = this._route.snapshot.params["p_id"]+"..."+
                   this._route.snapshot.params["p_name"]+"..."+
                   this._route.snapshot.params["p_cost"]
  }
  ngOnInit() {
  }
}
