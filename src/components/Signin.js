import React from "react";

export default function Signin() {
	return (
		<div className='signin'>
			<h1 style={{ color: "white" }}>Signin</h1>
			<input type="text" placeholder="login" />
			<br />
			<input type="password" placeholder="password" />
			<br />
			<input type="submit" />
		</div>
	);
}
