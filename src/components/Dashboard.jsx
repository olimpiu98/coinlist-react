import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./coinsinfo/Coinslist";

const Dashboard = () => {
	const [coins, setCoins] = useState([]);
	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		axios
			.get(url, { cancelToken: cancelToken.token })
			.then((response) => {
				setCoins(response.data);
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
		<>
			<Coins coins={coins} />
		</>
	);
};

export default Dashboard;
