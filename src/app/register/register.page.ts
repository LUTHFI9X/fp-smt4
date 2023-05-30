import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  showPassword: boolean = false;


  form ={
    username : '',
    password : ''
  }
  constructor(private route : Router, private alert: AlertController) { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  register(){
    this.alert.create({
      message:"Berhasil Daftar", 
      buttons:[
        "OK"
      ]
    }).then(a=>a.present())
  }
}
