import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface ICanDeactivate {
	canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<ICanDeactivate> {
	canDeactivate(component: ICanDeactivate) {
		const canComponentDeactivate = component.canDeactivate ? component.canDeactivate() : true;

		if (!canComponentDeactivate) alert("Action cancelled by CanDeactivateGuardService");

		return canComponentDeactivate;
	}
}
