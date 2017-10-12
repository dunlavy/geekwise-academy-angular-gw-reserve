import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardService implements CanActivate {
	constructor(
		private _loginService: LoginService,
		private _router: Router
	) { }

	canActivate() {
		const isLoggedIn = Boolean(this._loginService.getLoggedInUser());

		if (!isLoggedIn) this._router.navigate(["welcome"], { fragment: "show-warning" });

		return isLoggedIn;
	}
}
