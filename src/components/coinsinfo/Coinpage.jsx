import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "./css/coinpage.css";

const Coin = () => {
	const params = useParams();
	const [coin, setCoin] = useState({});
	const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		axios
			.get(url, { cancelToken: cancelToken.token })
			.then((res) => {
				console.log("d");
				setCoin(res.data);
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
			<div className='coin-container'>
				<div className='content'>
					<h1 className='uppercase text-5xl font-bold tracking-wide'>{coin.name}</h1>
				</div>
				<div className='content'>
					<div className='rank'>
						<span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
					</div>
					<div className='info'>
						<div className='coin-heading'>
							{coin.image ? <img src={coin.image.small} alt={coin.id} /> : null}
							<p className='ml-5 mr-0 text-2xl'>{coin.name}</p>
							<p className='uppercase text-xs'>{coin.symbol}</p>
						</div>
						<div className='coin-price text-4xl'>
							{coin.market_data?.current_price ? (
								<h1>{coin.market_data.current_price.usd.toLocaleString()}$</h1>
							) : null}
						</div>
					</div>
				</div>
				<div className='content'>
					<table>
						<thead>
							<tr>
								<th>1hr</th>
								<th>24hr</th>
								<th>7d</th>
								<th>14d</th>
								<th>30d</th>
								<th>1yr</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									{coin.market_data?.price_change_percentage_1h_in_currency ? (
										<p
											className={
												coin.market_data.price_change_percentage_1h_in_currency.usd > 0
													? "positive"
													: "negative"
											}
										>
											{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
										</p>
									) : null}
								</td>
								{coin.market_data?.price_change_percentage_24h_in_currency ? (
									<td>
										<p
											className={
												coin.market_data.price_change_percentage_24h_in_currency.usd > 0
													? "positive"
													: "negative"
											}
										>
											{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
										</p>
									</td>
								) : null}
								{coin.market_data?.price_change_percentage_7d_in_currency ? (
									<td>
										<p
											className={
												coin.market_data.price_change_percentage_7d_in_currency.usd > 0
													? "positive"
													: "negative"
											}
										>
											{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%
										</p>
									</td>
								) : null}
								{coin.market_data?.price_change_percentage_14d_in_currency ? (
									<td>
										<p
											className={
												coin.market_data.price_change_percentage_14d_in_currency.usd > 0
													? "positive"
													: "negative"
											}
										>
											{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%
										</p>
									</td>
								) : null}
								{coin.market_data?.price_change_percentage_30d_in_currency ? (
									<td>
										<p
											className={
												coin.market_data.price_change_percentage_30d_in_currency.usd > 0
													? "positive"
													: "negative"
											}
										>
											{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%
										</p>
									</td>
								) : null}
								{coin.market_data?.price_change_percentage_1y_in_currency ? (
									<td>
										<p
											className={
												coin.market_data.price_change_percentage_1y_in_currency.usd > 0
													? "positive"
													: "negative"
											}
										>
											{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%
										</p>
									</td>
								) : null}
							</tr>
						</tbody>
					</table>
				</div>
				<div className='content'>
					<div className='coin-stats'>
						<div className='left'>
							<div className='row'>
								<h4>24 Hour Low</h4>
								{coin.market_data ? <p>{coin.market_data.low_24h.usd.toLocaleString()}$</p> : null}
							</div>
							<div className='row'>
								<h4>24 Hour Low</h4>
								{coin.market_data ? <p>{coin.market_data.low_24h.usd.toLocaleString()}$</p> : null}
							</div>
						</div>
						<div className='right'>
							<div className='row'>
								<h4>Market Cap</h4>
								{coin.market_data?.market_cap ? (
									<p>{coin.market_data.market_cap.usd.toLocaleString()}$</p>
								) : null}
							</div>
							<div className='row'>
								<h4>Circulating Supply</h4>
								{coin.market_data ? (
									<p>{coin.market_data.circulating_supply.toLocaleString()}</p>
								) : null}
							</div>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='about'>
						<h3>About</h3>
						<p
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(coin.description ? coin.description.en : ""),
							}}
						></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coin;
