import { Component } from "@angular/core";
import { ICanDeactivate } from "./../../services/deactivate-guard.service";

@Component({
	selector: "gw-room",
	templateUrl: "./room.component.html"
})
export default class RoomComponent implements ICanDeactivate {
	public canUserLeave;

	constructor() {
		this.canUserLeave = true;
	}

	public canDeactivate() {
		// the component does not fire this itself
		console.log("Testing if user can leave...  " + this.canUserLeave);
		return this.canUserLeave;
	}

	public toggleCanUserLeave() {
		this.canUserLeave = !this.canUserLeave;
	}
}
