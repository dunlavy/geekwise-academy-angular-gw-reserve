import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routedComponents } from "./app.routing.module";

import AppComponent from "./app.component";
import NavigationComponent from "./components/navigation/navigation.component";

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule
	],
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		routedComponents
	]
})
export class AppModule { }
