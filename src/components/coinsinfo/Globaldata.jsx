import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
							<Link to='/' className='text-amber-400 text-xs font-bold hover:text-amber-500'>
								{stats.active_cryptocurrencies}
							</Link>
						</p>
					) : null}
					{stats.markets ? (
						<p className='align-middle text-sm'>
							Exchanges:{" "}
							<Link
								to='/exchanges'
								className='text-amber-400 text-xs font-bold hover:text-amber-500'
							>
								{stats.markets}
							</Link>
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
