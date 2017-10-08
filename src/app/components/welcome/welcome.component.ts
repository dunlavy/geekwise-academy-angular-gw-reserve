import { Component, OnInit } from "@angular/core";

import { INavigationItem } from "./../../interfaces/INavigationItem";

@Component({
	selector: "gw-welcome",
	templateUrl: "./welcome.component.html",
	styleUrls: [
		"./welcome.component.css"
	]
})
export default class WelcomeComponent implements OnInit {
	ngOnInit() { }
}
