import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.page.html',
  styleUrls: ['./comic.page.scss'],
})
export class ComicPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  doSearch(){
    this.route.navigate(['search']);
  }

  doWelcome(){
    this.route.navigate(['welcome']);
  }

  doTransaction(){
    this.route.navigate(['transaction']);
  }

  doItem(){
    this.route.navigate(['item']);
  }

  doCart(){
    this.route.navigate(['cart']);
  }
}
