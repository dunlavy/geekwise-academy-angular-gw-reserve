import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardService implements CanActivate {
	constructor(private _loginService: LoginService) { }

	canActivate() {
		return Boolean(this._loginService.getLoggedInUser());
	}
}
