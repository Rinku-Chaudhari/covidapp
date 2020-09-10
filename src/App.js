import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import List from "./Components/Listview/Listview";
import Context from "./Context/Context";

const App = () => {
	const [selectedCountry, setSelectedcountry] = useState("World");
	return (
		<div className="app">
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
	);
};

export default App;
