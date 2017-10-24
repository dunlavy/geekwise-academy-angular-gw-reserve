import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";

import { IRoom } from "./../interfaces/IRoom";

@Injectable()
export class RoomService {
	// let's use this standard array for our methods here
	private _rooms:IRoom[];

	// let's bind to this using Angular's async pipe
	public roomsObservable:Observable<IRoom[]>;

	constructor(
		private _database:AngularFireDatabase
	) {
		this.roomsObservable = this._database.list("rooms").valueChanges<IRoom>();

		this.roomsObservable.subscribe(rooms => {
			this._rooms = rooms;
		});
	}

	getRoomById(id):Observable<IRoom> {
		return this.roomsObservable.map(rooms => rooms.find(room => room.id === id));
	}

	writeRoomReservation(id, reservation) {}

	deleteRoomReservation(id, reservation) {}
}
