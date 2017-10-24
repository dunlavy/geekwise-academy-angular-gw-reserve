import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "gw-room",
	templateUrl: "./room.component.html",
	styleUrls: ["./room.component.css"]
})
export default class RoomComponent implements OnInit {
	public roomId:string;

	constructor(private _activatedRoute:ActivatedRoute) {	}

	public ngOnInit() {
		this._activatedRoute.paramMap.subscribe(route => {
			this.roomId = route.get("id");
		});
	}
}
