import React from "react";
import  List  from "./List";

import { FirebaseState } from "./context/firebase/FirebaseState";

export default function TodoApp() {
	return (
		<FirebaseState>
            <List/>
        </FirebaseState>
	);
}
