import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface ICanDeactivate {
	canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<ICanDeactivate> {
	canDeactivate(component: ICanDeactivate) {
		if (!component.canDeactivate) return true;

		return component.canDeactivate();
	}
}
