import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'pagethree',
  templateUrl: './pagethree.component.html',
  styles: []
})
export class PagethreeComponent implements OnInit {
  private var_three:string;
  constructor(private _route:ActivatedRoute) { 
    this.var_three = this._route.snapshot.params["p_id"]+"..."+
                     this._route.snapshot.params["p_name"]+"..."+
                     this._route.snapshot.params["p_cost"];
  }
  ngOnInit() {
  }
}
