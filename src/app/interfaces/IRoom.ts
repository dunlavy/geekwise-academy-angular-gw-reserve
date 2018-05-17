import { IReservation } from "./IReservation";

export interface IRoom {
	id: string;
	title: string;
	picture: string;
	reservations?: IReservation[];
}
