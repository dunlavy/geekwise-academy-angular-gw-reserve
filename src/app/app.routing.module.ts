import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import WelcomeComponent from "./components/welcome/welcome.component";
import FourOhFourComponent from "./components/404/404.component";
import RoomComponent from "./components/room/room.component";

const routes:Routes = [
	{
		path: "",
		component: WelcomeComponent
	},
	{
		path: "welcome",
		component: WelcomeComponent
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
	WelcomeComponent, FourOhFourComponent, RoomComponent
];
