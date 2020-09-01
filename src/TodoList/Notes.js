import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.scss";

export const Notes = ({ notes, onRemove }) => (
	<TransitionGroup component="ul" className="list-group">
		{notes.map((note) => (
			<CSSTransition
			key={note.id}
			classNames={'note'}
			timeout={800}
			>
				<li className="list-group-item note" >
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
			</CSSTransition>
		))}
	</TransitionGroup>
);
