import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import List from "./Components/Listview/Listview";
import Context from "./Context/Context";
import Loader from "./Components/Loader/Loader";

const App = () => {
	const [selectedCountry, setSelectedcountry] = useState("World");
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 500);

	return (
		<div>
			<div className="app" style={loading ? { display: "none" } : null}>
				<Context.Provider
					value={{
						selectedCountry: selectedCountry,
						setSelectedcountry: setSelectedcountry,
					}}
				>
					<Header />
					<Summary />
					<List />
				</Context.Provider>
			</div>

			<div style={!loading ? { display: "none" } : null}>
				<Loader />
			</div>
		</div>
	);
};

export default App;
