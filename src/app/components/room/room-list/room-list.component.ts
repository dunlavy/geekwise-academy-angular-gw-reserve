import { Component, OnInit, Input } from "@angular/core";

import { IReservation } from "./../../../interfaces/IReservation";

@Component({
	selector: "gw-room-list",
	templateUrl: "./room-list.component.html",
	styleUrls: ["./room-list.component.css"]
})
export default class RoomListComponent implements OnInit {
	@Input()
	public roomId:string;

	public reservations:IReservation[];

	public ngOnInit() {
		this.reservations = [];
	}
}
