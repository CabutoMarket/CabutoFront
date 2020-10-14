import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	constructor(private  authService:  AuthService, private  router:  Router) { }
	
  ngOnInit() {
  }

register(form){
	form = form.value
	console.log(form)
	this.authService.addUser(form).subscribe(data=> {
		console.log("imprimiendo data",data, form)
		this.router.navigateByUrl('/login');
	})
}
}
/*
register(form) {
	form = form.value
	console.log(form)
    this.authService.addUser(form.value).subscribe((res) => {
      this.router.navigateByUrl('/home');
    });
  }
}

register(form) {
    this.authService.addUser(form.value).subscribe((res) => {
      this.router.navigateByUrl('/home');
    });
  }
*/