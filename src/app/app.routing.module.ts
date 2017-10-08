import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import FourOhFourComponent from "./404-component/404-component";

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
		component: FourOhFourComponent
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
	FourOhFourComponent
];
