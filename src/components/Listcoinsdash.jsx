import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Coins from "./coinsinfo/Coinslist";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationLink() {
	const [coins, setCoins] = useState([]);
	const [coinsPerPage] = useState(25);
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const page = parseInt(query.get("page") || "1", 10);
	const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${page}&sparkline=false`;

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

	const pageNumberLocal = [];
	for (let i = 1; i <= Math.ceil(5000 / coinsPerPage); i++) {
		pageNumberLocal.push(i);
	}

	return (
		<>
			<Coins coins={coins} />
			<div className='flex justify-center pt-3 '>
				<Pagination
					shape='rounded'
					variant='outlined'
					color='primary'
					siblingCount={2}
					boundaryCount={1}
					page={page}
					count={pageNumberLocal.length}
					renderItem={(item) => (
						<PaginationItem
							component={Link}
							to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
							{...item}
						/>
					)}
				/>
			</div>
		</>
	);
}
