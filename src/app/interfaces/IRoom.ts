import IReservation from "./IReservation";

export default interface IRoom {
	id:string;
	name:string;
	picture:string;
	reservations?:IReservation[];
}
