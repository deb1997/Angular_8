import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'pagetwo',
  templateUrl: './pagetwo.component.html',
  styles: []
})
export class PagetwoComponent implements OnInit {
  private var_two:string;
  constructor(private _route:ActivatedRoute) { 
    this.var_two = this._route.snapshot.params["p_id"]+"..."+
                   this._route.snapshot.params["p_name"]+"..."+
                   this._route.snapshot.params["p_cost"];
  }
  ngOnInit() {
  }
}
