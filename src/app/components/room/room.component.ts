import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RoomService } from "./../../services/room.service";

@Component({
	selector: "gw-room",
	templateUrl: "./room.component.html",
	styleUrls: ["./room.component.css"]
})
export default class RoomComponent implements OnInit {
	public room;

	constructor(
		private _activatedRoute:ActivatedRoute,
		private _roomService:RoomService
	) { }

	public ngOnInit() {
		this._activatedRoute.paramMap.subscribe(route => this._switchRoom(route.get("id")));
	}

	private _switchRoom(id:string) {
		this._roomService.getRoomById(id).subscribe(room => { this.room = room });
	}
}
