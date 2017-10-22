import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ICanDeactivate } from "./../../../services/deactivate-guard.service";

@Component({
	selector: "gw-room-reactive-form",
	templateUrl: "./room-reactive-form.component.html",
	styleUrls: ["./room-reactive-form.component.css"]
})
export default class RoomFormComponent implements OnInit, ICanDeactivate {
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

	public canDeactivate() {
		return confirm("You appear to have unsaved changes.  Discard and continue?");
	}

	private _switchRoom(id:string) {
		this.roomId = id;
	}
}
