import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  doWelcome(){
    this.route.navigate(['welcome'])
  }

  doSearch(){
    this.route.navigate(['search'])
  }

  doItem(){
    this.route.navigate(['item'])
  }

  doTransaction(){
    this.route.navigate(['transaction'])
  }
}
