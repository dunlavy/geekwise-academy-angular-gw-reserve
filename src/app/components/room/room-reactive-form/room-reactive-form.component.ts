import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { IReservationForm } from "./IReservationForm";
import { ICanDeactivate } from "./../../../services/deactivate-guard.service";
import { RoomService } from "./../../../services/room.service";

import { validateMatching } from "./../../../validators/validateMatching";

@Component({
	selector: "gw-room-reactive-form",
	templateUrl: "./room-reactive-form.component.html",
	styleUrls: ["./room-reactive-form.component.css"]
})
export default class RoomFormComponent implements OnInit, ICanDeactivate {
	public roomId: string;
	public roomForm: FormGroup;
	public reasons: string[];

	private _submitted: boolean;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _formBuilder: FormBuilder,
		private _roomService: RoomService,
		private _router: Router
	) { }

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

		this._submitted = false;

		const formFields: IReservationForm = {
			isAgreed: [false, Validators.requiredTrue],
			email: ['', [Validators.required, Validators.email]],
			emailConfirmation: '',
			startTime: [this._getDefaultStartDate().toTimeString().split(" ")[0], Validators.required],
			endTime: [this._getDefaultEndDate().toTimeString().split(" ")[0], Validators.required],
			reason: ['', Validators.required]
		};

		this.roomForm = this._formBuilder.group(formFields, {
			validator: validateMatching
		});
	}

	public canDeactivate() {
		if (this.roomForm.pristine || this._submitted) return true;

		return confirm("You appear to have unsaved changes.  Discard and continue?");
	}

	public onSubmit() {
		this._submitted = true;

		return this._roomService.writeRoomReservation(this.roomId, this.roomForm.value)
			.then(() => this._router.navigate(["../list"], { relativeTo: this._activatedRoute }));
	}

	private _switchRoom(id: string) {
		this.roomId = id;
	}

	private _getDefaultStartDate() {
		const date = new Date();

		date.setHours(date.getHours() + 1);
		date.setMinutes(0);
		date.setSeconds(0);

		return date;
	}

	private _getDefaultEndDate() {
		const date = this._getDefaultStartDate();

		date.setHours(date.getHours() + 1);

		return date;
	}
}
