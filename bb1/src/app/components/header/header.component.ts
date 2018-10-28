import { Component, OnInit, ViewEncapsulation} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class HeaderComponent implements OnInit {
public menu:boolean=false;

  constructor(public router:Router) {
    
  }
  goToMovie(){
    this.router.navigateByUrl('/movie');
  }
  open(){
     
    this.menu = !this.menu;
    
     }


  ngOnInit() {
     
  }

}
