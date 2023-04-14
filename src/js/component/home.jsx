import React, { useState } from "react";
import Title from './Title.jsx';
import BodyList from "./BodyList.jsx";

const Home = () => {
	return (
		<>
			<div className="container">
				<Title />
				<BodyList />
			</div>
		</>
	);
};

export default Home;
