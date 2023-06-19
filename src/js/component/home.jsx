import React from "react";


//create your first component
const Home = ({ first, second, third, fourth, fifth, sixth }) => {

	return (
		<div className="bg-black col-12 text-center d-flex justify-content-center align-items-center vh-100">
			<div className="col bg-dark text-white fs-1 border border-dark p-3 m-2" ><i class="fas fa-clock"></i></div>
			<div className="col bg-dark text-white fs-1 border border-dark p-3 m-2">{sixth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-3 m-2">{fifth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-3 m-2">{fourth}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-3 m-2">{third}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-3 m-2">{second}</div>
			<div className="col bg-dark text-white fs-1 border border-dark p-3 m-2">{first}</div>
		</div>
	);

};


export default Home;