import { Component } from "@angular/core";
import { LoginService } from "./../../services/login.service";

@Component({
	selector: "gw-login",
	templateUrl: "./login.component.html"
})
export default class LoginComponent {
	constructor(private _loginService: LoginService) { }

	public login() {
		this._loginService.login();
	}

	public logout() {
		this._loginService.logout();
	}

	public get loggedInUser() {
		return this._loginService.getLoggedInUser();
	}
}
