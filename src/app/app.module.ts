import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routedComponents } from "./app.routing.module";

import AppComponent from "./app.component";

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
		routedComponents
	]
})
export class AppModule { }
