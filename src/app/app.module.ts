import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routedComponents } from "./app.routing.module";

import { LoginService } from "./services/login.service";

import AppComponent from "./app.component";
import NavigationComponent from "./components/navigation/navigation.component";
import LoginComponent from "./components/login/login.component";

@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		LoginService
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		LoginComponent,
		routedComponents
	]
})
export class AppModule { }
