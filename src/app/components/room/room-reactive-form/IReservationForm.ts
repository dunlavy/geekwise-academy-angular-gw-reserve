import { IReservation } from "./../../../interfaces/IReservation";

export interface IReservationForm {
	email: string | any[],
	reason: string | any[],
	startDateTime: string | any[],
	endDateTime: string | any[],
	emailConfirmation: string | any[],
	isAgreed: string | any[]
}
