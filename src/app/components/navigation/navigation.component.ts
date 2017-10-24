import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { INavigationItem } from "./../../interfaces/INavigationItem";
import { IRoom } from "./../../interfaces/IRoom";
import { RoomService } from "./../../services/room.service";

@Component({
	selector: "gw-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.css"]
})
export default class NavigationComponent implements OnInit {
	public navigationItems:INavigationItem[];

	constructor(private _roomService:RoomService) { }

	ngOnInit() {
		this.navigationItems = [];

		this.navigationItems.push({
			color: "blue",
			title: "Welcome",
			url: "/welcome"
		});

		this._roomService.roomsObservable
			.map(rooms => {
				return rooms.map(room => {
					const navigationItem:INavigationItem = {
						color: "green",
						title: room.name,
						url: "/rooms/" + room.id
					};

					return navigationItem;
				});
			})
			.subscribe(rooms => {
				this.navigationItems = this.navigationItems.concat(rooms);
			});
	}
}
