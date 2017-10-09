import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";

@Component({
	selector: "gw-login",
	templateUrl: "./login.component.html"
})
export default class LoginComponent {
	constructor(
		private _loginService: LoginService,
		private _router: Router
	) { }

	public login() {
		this._loginService.login();
	}

	public logout() {
		this._loginService.logout();

		if (this._router.url.substr(0, 6) === "/rooms") this._router.navigateByUrl("/welcome");
	}

	public get loggedInUser() {
		return this._loginService.getLoggedInUser();
	}
}
