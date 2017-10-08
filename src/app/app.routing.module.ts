import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import FourOhFourComponent from "./404-component/404-component";
import RoomComponent from "./room/room";

const routes:Routes = [
	{
		path: "",
		component: FourOhFourComponent
	},
	{
		path: "welcome",
		component: FourOhFourComponent
	},
	{
		path: "rooms/:id",
		component: RoomComponent
	},
	{
		path: "**",
		component: FourOhFourComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

export const routedComponents = [
	FourOhFourComponent, RoomComponent
];
