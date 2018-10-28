import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class FilterComponent implements OnInit {
    public show:boolean = false;
  constructor(
  ) {
   
  }
  list() {
    this.show = !this.show;

  }

  ngOnInit() {
  }

}