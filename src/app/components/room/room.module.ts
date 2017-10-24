import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";

import { RoomRoutingModule, routedComponents } from "./room.routing.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RoomRoutingModule
	],
	declarations: [
		routedComponents
	],
	providers: [
		FormBuilder
	]
})
export class RoomModule { }
