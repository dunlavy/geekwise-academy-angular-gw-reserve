import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";

import { IRoom } from "./../interfaces/IRoom";

@Injectable()
export class RoomService {
	// let's bind to this using Angular's async pipe
	public roomsObservable: Observable<IRoom[]>;

	constructor(private _database: AngularFireDatabase) {
		this.roomsObservable = this._database.list("rooms").valueChanges();
	}

	getRoomById(id): Observable<IRoom> {
		return this.roomsObservable
			.map((rooms:IRoom[]) => rooms.find(room => room.id === id))
			.map((room:IRoom) => {
				// OK, so _database.list("rooms") massages our room response from Firebase into something
				// we can iterate but reservations remain in a key structure as depicted.

				// example:
				// {
				// 	"-KxHthSjHB6uVWZOCBXR": {
				// 		"email":"josh@hotmale.com",
				// 		"emailConfirmation":"josh@hotmale.com",
				// 		"endTime":"14:00",
				// 		"isAgreed":true,
				// 		"reason":"Scrum meeting",
				// 		"startTime":"12:00"
				// 	},
				// 	"-KxHtmNfK_DSZQ8QqFWt": {
				// 		"email":"josh@hotmale.com",
				// 		"emailConfirmation":"josh@hotmale.com",
				// 		"endTime":"16:00",
				// 		"isAgreed":true,
				// 		"reason":"Scrum beating",
				// 		"startTime":"15:00"
				// 	}
				// }

				// Here in our code, let's do the massaging ourselves so we may iterate reservations with
				// an *ngFor..., please refer to TypeScript's documentation for "for...of", "for...in"

				const reservations = [];

				for (let reservationKey in room.reservations) {
					const reservation = room.reservations[reservationKey];
					reservation.id = reservationKey;
					reservation.endTime = reservation.endTime.replace("00:00", "00");
					reservation.startTime = reservation.startTime.replace("00:00", "00");
					reservations.push(reservation);
				}

				// let's replace what Firebase gives us with this nice array we just built
				room.reservations = reservations;

				return room;
			});
	}

	writeRoomReservation(roomId, reservation) {
		return this._database.list("rooms/" + roomId + "/reservations").push(reservation);
	}

	deleteRoomReservation(roomId, reservationId) {
		return this._database.list("rooms/" + roomId + "/reservations").remove(reservationId);
	}
}
