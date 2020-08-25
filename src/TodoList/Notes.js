import React from "react";

export const Notes = ({ notes }) => {
	return (
		<ul className="list-group">
			{notes.map((note) => (
				<li className="list-group-item note" key={note.id}>
					<span>{note.title}</span>
					<small>{new Date().toLocaleDateString()}</small>
					<button type="button" className="btn btn-outline-danger btn-sm">
						&times;
					</button>
				</li>
			))}
		</ul>
	);
};