import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { trigger, state, style, animate, transition } from "@angular/animations";

import { IRoom } from "./../../../interfaces/IRoom";

import { RoomService } from "./../../../services/room.service";

const animations = [
	trigger("onLoad", [
		state("init", style({
			transform: "translateX(-10%)",
			opacity: 0
		})),
		state("complete", style({
			transform: "translateX(0)",
			opacity: 1
		})),
		transition("init => complete", animate("150ms ease-out"))
	])
];

@Component({
	selector: "gw-room-list",
	templateUrl: "./room-list.component.html",
	styleUrls: ["./room-list.component.css"],
	animations
})
export default class RoomListComponent implements OnInit {
	public room:IRoom;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _roomService: RoomService
	) { }

	public ngOnInit() {
		this._activatedRoute.parent.paramMap.subscribe(route => this._switchRoom(route.get("id")));
	}

	public deleteReservation(id) {
		this._roomService.deleteRoomReservation(this.room.id, id);
	}

	private _switchRoom(id: string) {
		this._roomService.getRoomById(id)
			.map(room => {
				room.reservations.forEach((reservation, index) => {
					setTimeout(() => {
						reservation.isTadaTime = true;
					}, 100 * index);
				});

				return room;
			})
			.subscribe(room => { this.room = room });
	}
}
