import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import ComponentOne from "./component-one/component-one";
import ComponentTwo from "./component-two/component-two";
import FourOhFourComponent from "./404-component/404-component";

const routes:Routes = [
	{
		path: "c1",
		component: ComponentOne
	},
	{
		path: "c2",
		component: ComponentTwo
	},
	{
		path: "",
		component: ComponentOne
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
	ComponentOne,
	ComponentTwo,
	FourOhFourComponent
];
