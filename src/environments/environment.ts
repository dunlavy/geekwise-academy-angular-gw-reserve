// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,

	firebaseConfiguration: {
		apiKey: "AIzaSyDhJPjpVUCmCMvw6DTaTlorDLnE1Enh4Wg",
		authDomain: "confdeconflictor.firebaseapp.com",
		databaseURL: "https://confdeconflictor.firebaseio.com",
		projectId: "confdeconflictor",
		storageBucket: "confdeconflictor.appspot.com",
		messagingSenderId: "519140165558"
	}
};
