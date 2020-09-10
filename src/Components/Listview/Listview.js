import React, { useState, useEffect } from "react";
import "./Listview.css";

import Axios from "axios";
import Formatter from "../../Num_formatter/Formatter";

const Listview = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		Axios.get(`https://disease.sh/v3/covid-19/countries`).then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<div className="list">
			<h4>Total Cases by Country</h4>
			<div className="list_items">
				{data
					.sort((a, b) => {
						return b.cases - a.cases;
					})
					.map((dta) => {
						return (
							<div className="list_item" key={dta.country}>
								<p>{dta.country}</p>
								<p>{Formatter(dta.cases)}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Listview;
