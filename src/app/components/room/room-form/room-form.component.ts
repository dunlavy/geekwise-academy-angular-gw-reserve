import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
	selector: "gw-room-form",
	templateUrl: "./room-form.component.html",
	styleUrls: ["./room-form.component.css"]
})
export default class RoomFormComponent implements OnInit {
	public roomId:string;
	public reasons: string[];

	ngOnInit() {
		this.reasons = [
			"Séance",
			"Scrum meeting",
			"Scrum beating",
			"Performance review",
			"Client meetup",
			"Interview"
		];
	}

	onSubmit(reservationValues) {
		const message = "Room reservation submitted!";
		console.log(message, reservationValues);
		alert(message);
	}
}
