import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(public navCtrl: NavController, public router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['/tabs']);
    // this.navCtrl.navigateRoot('/tabs');
  }
}
