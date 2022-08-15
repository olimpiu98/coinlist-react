import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Coins from "./coinsinfo/Coinslist";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import CircularProgress from "@mui/material/CircularProgress";

export default function PaginationLink() {
	const [coins, setCoins] = useState([]);
	const coinsPerPage = 15;
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const page = parseInt(query.get("page") || "1", 10);
	const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${page}&sparkline=false`;
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		try {
			axios
				.get(url, { cancelToken: cancelToken.token })
				.then((response) => {
					setCoins(response.data);
					setLoading(false);
					console.log(`[dashboard ${page}] Data updated`);
				})
				.catch((err) => {
					if (axios.isCancel(err)) {
						console.log(`[dashboard${page}] Get complete`);
					} else console.log(".catch else");
				});
		} catch (err) {
			console.log("[dashboard]Error");
		}
		return () => {
			setLoading(true);
			console.log(`[dashboard${page}] Launch cancel & setLoading true`);
			cancelToken.cancel();
		};
	}, [url, page]);

	const pageNumberLocal = [];
	for (let i = 1; i <= Math.ceil(5000 / coinsPerPage); i++) {
		pageNumberLocal.push(i);
	}

	return (
		<>
			{loading ? (
				<div className='flex justify-center text-9xl h-screen'>
					<CircularProgress size='8rem' className='m-auto' />
				</div>
			) : (
				<div>
					<Coins coins={coins} />
					<div className='flex justify-center pt-3 '>
						<Pagination
							onChange={window.scrollTo(0, 0)}
							shape='rounded'
							variant='outlined'
							color='primary'
							siblingCount={1}
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
				</div>
			)}
		</>
	);
}
