import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./coinsinfo/Coinslist";
import Paginationlist from "./utility/Pagination";

const Dashboard = () => {
	const [coins, setCoins] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [coinsPerPage] = useState(30);
	const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`;

	const intexOfLast = currentPage * coinsPerPage;
	const intexOfFirst = intexOfLast - coinsPerPage;
	const currentCoins = coins.slice(intexOfFirst, intexOfLast);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
	}, [url]);

	return (
		<div>
			<Coins coins={currentCoins} />
			<Paginationlist
				coinsPerPage={coinsPerPage}
				totalCoinsPerPage={coins.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default Dashboard;
