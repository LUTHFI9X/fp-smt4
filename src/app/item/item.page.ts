import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  doWelcome(){
    this.route.navigate(['welcome'])
  }

    doSearch(){
    this.route.navigate(['search'])
  }

  doCart(){
    this.route.navigate(['cart'])
  }
}
