import React from "react";

const Context = React.createContext({
	selectedCountry: "",
	setSelectedcountry: () => {},
});

export default Context;
