import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { NgForm } from "@angular/forms";

@Component({
	selector: "gw-room-form",
	templateUrl: "./room-form.component.html",
	styleUrls: ["./room-form.component.css"]
})
export default class RoomFormComponent implements OnInit {
	public roomId:string;
	public reasons: string[];

	constructor(private _activatedRoute:ActivatedRoute) { }

	public ngOnInit() {
		this.reasons = [
			"Séance",
			"Scrum meeting",
			"Scrum beating",
			"Performance review",
			"Client meetup",
			"Interview"
		];

		this._activatedRoute.parent.paramMap.subscribe(param => {
			this._switchRoom(param.get("id"));
		});
	}

	public onSubmit(reservationValues) {
		const message = "Room reservation submitted!";
		console.log(message, reservationValues);
		alert(message);
	}

	private _switchRoom(id:string) {
		this.roomId = id;
	}
}
