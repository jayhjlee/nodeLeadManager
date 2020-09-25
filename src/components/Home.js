import React from "react";
import { Redirect } from "react-router-dom";

import Leads from "./Leads";

export default function Home(props) {
	const { token, isLoggedIn } = props;
	return isLoggedIn && token ? <Leads {...props} /> : <Redirect to="/log-in" />;
}
