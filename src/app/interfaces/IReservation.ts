export interface IReservation {
	id?: string;
	email: string;
	reason: string;
	startTime: string;
	endTime: string;
	emailConfirmation: string;
	isAgreed: string;
	[propName: string]: any;
}
