import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
	private _loggedInUser: Object;

	constructor() {
		console.log("LoginService initialized");

		this._loggedInUser = null;
	}

	public getLoggedInUser(): Object {
		return this._loggedInUser ? Object.assign({}, this._loggedInUser) : null;
	}

	public login(): void {
		this._loggedInUser = {
			name: "Josh R. Dunlavy"
		};
	}

	public logout(): void {
		this._loggedInUser = null;
	}
}
