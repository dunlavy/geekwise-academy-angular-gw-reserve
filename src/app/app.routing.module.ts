// vendor imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// components
import WelcomeComponent from "./components/welcome/welcome.component";
import FourOhFourComponent from "./components/404/404.component";

const basicRoutes:Routes = [
	{
		path: "",
		component: WelcomeComponent
	},
	{
		path: "welcome",
		component: WelcomeComponent
	},
	{
		path: "**",
		component: FourOhFourComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(basicRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

export const routedComponents = [
	WelcomeComponent, FourOhFourComponent
];
