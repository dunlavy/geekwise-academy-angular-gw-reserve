import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { trigger, state, style, animate, transition } from "@angular/animations";

import { RoomService } from "./../../services/room.service";

import { IRoom } from "./../../interfaces/IRoom";

const animations = [
	trigger("onLoad", [
		state("init", style({
			bottom: '-150px',
			opacity: .2
		})),
		state("complete", style({
			bottom: '-110px',
			opacity: .5
		})),
		transition("init => complete", animate("300ms ease-out"))
	])
];

@Component({
	selector: "gw-room",
	templateUrl: "./room.component.html",
	styleUrls: ["./room.component.css"],
	animations
})
export default class RoomComponent implements OnInit {
	public room:IRoom;
	public state:string;

	constructor(
		private _activatedRoute:ActivatedRoute,
		private _roomService:RoomService
	) { }

	public ngOnInit() {
		this._activatedRoute.paramMap.subscribe(route => {
			this.state = "init";
			this._switchRoom(route.get("id"));
		});
	}

	private _switchRoom(id:string) {
		this._roomService.getRoomById(id).subscribe(room => {
			this.state = "complete";
			this.room = room;
		});
	}
}
