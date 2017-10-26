import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";

@Component({
	selector: "gw-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export default class LoginComponent {
	public loggedInUser;

	constructor(
		private _loginService: LoginService,
		private _router: Router
	) {
		this._loginService.getLoggedInUser()
			.map(user => {
				if (!user) return;

				return {
					displayName: user.displayName,
					photoURL: user.photoURL
				}
			})
			.subscribe(user => {
				this.loggedInUser = user;
			});
	}

	public login() {
		this._loginService.login();
	}

	public logout() {
		this._loginService.logout();

		if (this._router.url.substr(0, 6) === "/rooms") this._router.navigateByUrl("/welcome");
	}
}
