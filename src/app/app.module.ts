import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule, routedComponents } from "./app.routing.module";
import { RoomModule } from "./components/room/room.module";

import { LoginService } from "./services/login.service";
import { RoomService } from "./services/room.service";

import AppComponent from "./app.component";
import NavigationComponent from "./components/navigation/navigation.component";
import LoginComponent from "./components/login/login.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "./../environments/environment";

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebaseConfiguration),
		AngularFireAuthModule,
		AngularFireDatabaseModule,

		// let's keep our routing-included modules distinguished, since the order they load matters
		RoomModule,
		AppRoutingModule,
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		LoginService,
		RoomService
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		LoginComponent,
		routedComponents
	]
})
export class AppModule { }
