import React from "react";
import "./style.scss";
import { Form } from "./Form";
import { Notes } from "./Notes";
import { Alert } from "./Alert";
import { AlertState } from "./context/alert/AlertState";

export default function List() {
	const notes = new Array(3)
		.fill("")
		.map((_, i) => ({ id: i, title: `Item: ${i + 1}` }));
	return (
		<AlertState>
			<div>
				<div className="container pt-4">
					
					<h1 className="bg-dark text-muted">Todo List</h1>
					<Alert />
					<Form />
					<hr />
					<Notes notes={notes} />
					
				</div>
			</div>
		</AlertState>
	);
}
