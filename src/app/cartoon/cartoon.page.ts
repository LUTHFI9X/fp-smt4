import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.page.html',
  styleUrls: ['./cartoon.page.scss'],
})
export class CartoonPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  doSearch(){
    this.route.navigate(['search'])
  }

  doWelcome(){
    this.route.navigate(['welcome'])
  }

  doTransaction(){
    this.route.navigate(['transaction']);
  }

  doCart(){
    this.route.navigate(['cart'])
  }
}
