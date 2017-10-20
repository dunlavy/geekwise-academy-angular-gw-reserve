import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routedComponents } from "./app.routing.module";
import { RoomModule } from "./components/room/room.module";

import { LoginService } from "./services/login.service";

import AppComponent from "./app.component";
import NavigationComponent from "./components/navigation/navigation.component";
import LoginComponent from "./components/login/login.component";

@NgModule({
	imports: [
		BrowserModule,

		// let's keep our routing-included modules distinguished, since the order they load matters
		RoomModule,
		AppRoutingModule,
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
