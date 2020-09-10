import React, { useState, useEffect, useContext } from "react";
import "./Header.css";

import Axios from "axios";
import Context from "../../Context/Context";

const Header = () => {
	const [countries, setCountries] = useState([]);
	const context = useContext(Context);

	useEffect(() => {
		Axios.get(`https://coronavirus-19-api.herokuapp.com/countries`).then(
			(res) => {
				setCountries(res.data);
			}
		);
	}, []);

	const toggleOptions = (e) => {
		context.setSelectedcountry(e.target.value);
	};

	return (
		<div className="header">
			<h4>COVID 19 INFO APP</h4>
			<select onChange={toggleOptions}>
				{countries.map((country) => {
					return (
						<option key={country.country} value={country.country}>
							{country.country}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Header;
