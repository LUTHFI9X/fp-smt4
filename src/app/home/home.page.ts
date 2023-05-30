import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showPassword: boolean = false;

  form ={
    username : '',
    password : ''
  }
  constructor(
    private route : Router) { }

  doLogin(){
  //   localStorage.setItem('username',this.form.username);
  //   localStorage.setItem('password',this.form.password);
  console.log(this.form.username)


    if(this.form.username == 'admin' && this.form.password == 'admin') {
      localStorage.setItem('role','admin')
      this.route.navigateByUrl('welcome');
    } else {
      localStorage.setItem('role','user');
      this.route.navigateByUrl('welcome');
    }

    // this.route.  s('welcome');


  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
