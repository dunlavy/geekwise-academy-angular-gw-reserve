export default interface IReservation {
	id?: string,
	email: string,
	reason: string,
	startDateTime: Date,
	endDateTime: Date
}
