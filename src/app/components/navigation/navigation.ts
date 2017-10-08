import { Component, OnInit } from "@angular/core";

import { INavigationItem } from "./../../interfaces/INavigationItem";

@Component({
	selector: "gw-navigation",
	templateUrl: "./navigation.html"
})
export default class NavigationComponent implements OnInit {
	public navigationItems:INavigationItem[];

	ngOnInit() {
		// before we consume a remote data source, we'll mock up data for our
		// navigation menu to bind to

		this.navigationItems = [
			{
				title: "Welcome",
				url: "/welcome"
			},
			{
				title: "Room 1",
				url: "/rooms/1"
			},
			{
				title: "Room 2",
				url: "/rooms/2"
			}
		];
	}
}
