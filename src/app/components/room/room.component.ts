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
		// my parent "room.component" is going to do all teh work getting room, so let's ensure
		// this hard work doesn't go to waste in our child components by fetching the same
		// information in them...

		this._activatedRoute.paramMap.subscribe(route => {
			this.roomId = route.get("id");
		});
	}
}
