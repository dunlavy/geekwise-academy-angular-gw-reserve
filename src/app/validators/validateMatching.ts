import { AbstractControl } from "@angular/forms";

export function validateMatching(control: AbstractControl) {
	const email = control.get("email");
	const emailConfirmation = control.get("emailConfirmation");

	if (!email || !emailConfirmation)
		throw new Error("Use me on a form with email and emailConfirmation controls!");

	if (email.value.toLowerCase() !== emailConfirmation.value.toLowerCase()) {
		emailConfirmation.setErrors({ doesNotMatch: true });

		return { doesNotMatch: true };
	}

	return;
}
