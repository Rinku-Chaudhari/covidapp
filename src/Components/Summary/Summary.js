import React, { useState, useContext, useEffect } from "react";
import "./Summary.css";

import Axios from "axios";
import Context from "../../Context/Context";
import Formatter from "../../Num_formatter/Formatter";
import NumberFormat from "react-number-format";

const Summary = () => {
	const [summary, setSummary] = useState([]);
	const context = useContext(Context);

	useEffect(() => {
		const url =
			context.selectedCountry === "World"
				? "https://disease.sh/v3/covid-19/all"
				: `https://disease.sh/v3/covid-19/countries/${context.selectedCountry}`;
		Axios.get(url).then((res) => {
			setSummary(res.data);
		});
	}, [context.selectedCountry]);

	return (
		<div className="summary">
			<div className="cases">
				<p>Total Cases Today</p>
				<p>
					<b>
						<NumberFormat
							value={summary.todayCases}
							thousandSeparator={true}
							displayType={"text"}
						/>
					</b>
				</p>
				<p>{Formatter(summary.cases)} Total</p>
			</div>

			<div className="recovered">
				<p>Total Recovered Today</p>
				<p>
					<b>
						<NumberFormat
							value={summary.todayRecovered}
							thousandSeparator={true}
							displayType={"text"}
						/>
					</b>
				</p>
				<p>{Formatter(summary.recovered)} Total</p>
			</div>

			<div className="deaths">
				<p>Total Deaths Today</p>
				<p>
					<b>
						<NumberFormat
							value={summary.todayDeaths}
							thousandSeparator={true}
							displayType={"text"}
						/>
					</b>
				</p>
				<p>{Formatter(summary.deaths)} Total</p>
			</div>
		</div>
	);
};

export default Summary;
