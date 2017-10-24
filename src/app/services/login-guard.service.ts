import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardService implements CanActivate {
	private _isUserLoggedIn: boolean;

	constructor(
		private _loginService: LoginService,
		private _router: Router
	) { }

	canActivate() {
		return this._loginService.getLoggedInUser().map(
			loggedInUser => {
				if (loggedInUser) return true;

				this._router.navigate(["welcome"], {
					fragment: "login-needed"
				});

				return false;
			}
		);
	}
}
