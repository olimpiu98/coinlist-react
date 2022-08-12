import React, { useState, useEffect } from "react";
import axios from "axios";

const Globaldata = () => {
	const [stats, setStats] = useState([]);
	const url = "https://api.coingecko.com/api/v3/global";
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		axios
			.get(url, { cancelToken: cancelToken.token })
			.then((response) => {
				setStats(response.data.data);
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
		<div className='hidden border-b border-indigo-400 sm:block '>
			<div className='max-w-7xl py-2 mx-auto px-2 lg:px-8'>
				<div className='flex justify-start gap-x-7'>
					{stats.active_cryptocurrencies ? (
						<p className='align-middle text-sm'>
							Coins:{" "}
							<span className='text-amber-400 text-xs font-bold'>
								{stats.active_cryptocurrencies}
							</span>
						</p>
					) : null}
					{stats.markets ? (
						<p className='align-middle text-sm'>
							Exchanges: <span className='text-amber-400 text-xs font-bold'>{stats.markets}</span>
						</p>
					) : null}
					{stats.active_cryptocurrencies ? (
						<p className='align-middle text-sm'>
							Total market cap:{" "}
							<span className='text-amber-400 text-xs font-bold'>
								{stats.total_market_cap.usd.toLocaleString()}
							</span>{" "}
							<span className='align-middle text-[.7rem] font-medium'>$</span>
						</p>
					) : null}
					{stats.total_volume ? (
						<p className='align-middle text-sm'>
							24h Vol:{" "}
							<span className='text-amber-400 text-xs font-bold'>
								{stats.total_volume.usd.toLocaleString()}
							</span>{" "}
							<span className='align-middle text-[.7rem] font-medium'>$</span>
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Globaldata;
