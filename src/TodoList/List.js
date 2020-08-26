import React, { useContext, useEffect } from "react";
import "./style.scss";
import { Form } from "./Form";
import { Notes } from "./Notes";
import { Alert } from "./Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { FirebaseContext } from "./context/firebase/firebaseContext";
import { Loader } from "./Loader";

export default function List() {
	const { loading, notes, fetchNotes } = useContext(FirebaseContext);

	useEffect(() => {
		fetchNotes();
		// eslint-disable-next-line
	}, []);

	return (
		<FirebaseState>
			<AlertState>
				<div>
					<div className="container pt-4">
						<h1 className="bg-dark text-muted">Todo List</h1>
						<Alert />
						<Form />
						<hr />
						{loading ? <Loader /> : <Notes notes={notes} />}
					</div>
				</div>
			</AlertState>
		</FirebaseState>
	);
}
