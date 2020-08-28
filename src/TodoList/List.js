import React, { useContext, useEffect } from "react";
import { Form } from "./Form";
import { Notes } from "./Notes";
import { Alert } from "./Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseContext } from "./context/firebase/firebaseContext";
import { Loader } from "./Loader";
// import "./style.scss";

export default function List() {
 const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

	useEffect(() => {
		fetchNotes();
		// eslint-disable-next-line
	}, []);
	
	return (
		
			<AlertState>
				<div>
					<div className="container pt-4">
						<h1 className="bg-dark text-muted">Todo List</h1>
						<Alert />
						<Form />
						
						<hr />
						{loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote}/>}
						
					</div>
				</div>
			</AlertState>
		
	);
}
