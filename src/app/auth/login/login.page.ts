import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	validacion : {};

  constructor(private  authService:  AuthService, private  router:  Router) { }
	
  ngOnInit() {
  }

  verificar(form){
	form = form.value
	console.log(form)
	this.authService.VerificarUser(form).subscribe(data=> {
    this.validacion=data;
    console.log(this.validacion)
		this.router.navigateByUrl('/producto');
	})
}
}


