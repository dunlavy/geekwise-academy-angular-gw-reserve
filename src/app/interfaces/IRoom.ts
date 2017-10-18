import { IReservation } from "./IReservation";

export interface IRoom {
	id:string;
	name:string;
	picture:string;
	reservations?:IReservation[];
}
