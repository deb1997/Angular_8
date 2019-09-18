import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'childthree',
  templateUrl: './childthree.component.html',
  styles: []
})
export class ChildthreeComponent implements OnInit {
  private var_six:string;
  constructor(private _route:ActivatedRoute) { 
    this.var_six = this._route.snapshot.params["p_id"]+"..."+
                   this._route.snapshot.params["p_name"]+"..."+
                   this._route.snapshot.params["p_cost"];
  }
  ngOnInit() {
  }
}
