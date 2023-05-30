import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private route : Router) { }
  form ={
    username : '',
    password : ''
  }
  ngOnInit() {
  }
  doLogout(){
    localStorage.clear();
    this.route.navigateByUrl('home')
  }
  doSearch(){
    this.route.navigate(['search'])
  }

  doItem() {
    this.route.navigate(['item']);
  }

  doCart(){
    this.route.navigate(['cart']);
  }

  doTransaction(){
    this.route.navigate(['transaction']);
  }

  ngDestroy(){
    this.doLogout()
  } 

}
