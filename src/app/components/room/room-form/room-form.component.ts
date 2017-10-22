import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { NgForm } from "@angular/forms";

import { ICanDeactivate } from "./../../../services/deactivate-guard.service";

@Component({
	selector: "gw-room-form",
	templateUrl: "./room-form.component.html",
	styleUrls: ["./room-form.component.css"]
})
export default class RoomFormComponent implements OnInit, ICanDeactivate {
	public roomId:string;
	public reasons: string[];

	@ViewChild("roomForm")
	private _form:NgForm;

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

	private _switchRoom(id:string) {
		this.roomId = id;
	}

	public canDeactivate() {
		if (this._form.pristine || this._form.submitted) return true;

		return confirm("You appear to have unsaved changes.  Discard and continue?");
	}

	public onSubmit(reservationValues) {
		const message = "Room reservation submitted!";
		console.log(message, reservationValues);
		alert(message);
	}
}
