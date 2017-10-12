import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "gw-welcome",
	templateUrl: "./welcome.component.html",
	styleUrls: [ "./welcome.component.css" ]
})
export default class WelcomeComponent implements OnInit {
	public isShowingLoginWarning;

	constructor(private _activatedRoute:ActivatedRoute) { }

	ngOnInit() {
		this._activatedRoute.fragment.subscribe({
			next : fragment => {
				this.isShowingLoginWarning = fragment;
			}
		});
	}

	closeWarnings() {
		this.isShowingLoginWarning = false;
	}
}
