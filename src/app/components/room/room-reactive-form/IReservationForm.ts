import { IReservation } from "./../../../interfaces/IReservation";

export interface IReservationForm extends IReservation {
	emailConfirmation: string;
	isAgreed: boolean;
}
