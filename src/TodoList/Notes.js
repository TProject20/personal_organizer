import React from "react";
import "./style.scss";

export const Notes = ({ notes, onRemove }) => (

	<ul className="list group">
		{notes.map((note) => (
			<li className="list-group-item note" key={note.id}>
				<div>
					<span>{note.title}</span>
					<small>{note.date}</small>
				</div>
				<button
					type="button"
					onClick={() => onRemove(note.id)}
					className="btn btn-outline-danger btn-sm"
				>
					&times;
				</button>
			</li>
		))}

	</ul>

);
