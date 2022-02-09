import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  message: string = null;
  imc: number = null;
  valid: { masse: boolean; taille: boolean} = {
    masse: true,
    taille: true,
  };
  user: { masse: number; taille: number} = {
    masse: null,
    taille: null,
  };
  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.message = null;
    this.imc = null;
    this.valid.masse = true;
    this.valid.taille = true;
    if (!this.user.masse) {
      this.valid.masse = false;
    }
    if (!this.user.taille) {
      this.valid.taille = false;
    }
    if (this.user.masse && this.user.taille) {
      this.valid.masse = true;
      this.valid.taille = true;
      const { message, imc} = this.calculImc(this.user);
      this.message = message;
      this.imc = imc;
    }
  }

  calculImc(user: { masse: number; taille: number}): {message: string; imc: number} {
    let message = '';
    const imc = user.masse / (user.taille * user.taille);
    if (imc < 16.5) {
      message = 'dénutrition';
    } else if (imc >= 16.5 &&  imc < 18.5) {
      message = 'maigreur';
    } else if (imc >= 18.5 &&  imc < 25) {
      message = 'poids normal';
    } else if (imc >= 25 &&  imc < 30) {
      message = 'surpoids';
    } else if (imc >= 30 &&  imc < 35) {
      message = 'obésité modérée';
    } else if (imc >= 35 &&  imc < 40) {
      message = 'obésité sévère';
    } else if (imc >= 40) {
      message = 'obésité morbide ou massive';
    }
    return {message, imc};
  }



}
