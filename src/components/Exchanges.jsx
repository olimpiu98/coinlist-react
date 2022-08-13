import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Listofexchanges from "./exchangeinfo/Listofexchanges";

const Exchanges = () => {
	const [exchanges, setExchanges] = useState([]);
	const url = "https://api.coingecko.com/api/v3/exchanges?per_page=50";
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		axios
			.get(url, { cancelToken: cancelToken.token })
			.then((response) => {
				setExchanges(response.data);
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
				}
			});
		return () => {
			cancelToken.cancel();
		};
	}, []);
	return (
		<div>
			<Listofexchanges exchanges={exchanges} />
		</div>
	);
};

export default Exchanges;
