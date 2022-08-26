import React from "react";
import { Link } from "react-router-dom";
import Coin from "./Coinpage";

const Listofcoins = (props) => {
	return (
		<>
			<div className='coin-row'>
				<p>
					<Link to={`/coin/${props.coins.id}`} element={<Coin />}>
						{props.coins.market_cap_rank}
					</Link>
				</p>
				<span className='img-symbol'>
					<Link to={`/coin/${props.coins.id}`} element={<Coin />}>
						<img className='img-inlist' src={props.coins.image} alt='coin logo' />
					</Link>
					<Link to={`/coin/${props.coins.id}`} element={<Coin />}>
						<p className='coin-name'>{props.coins.name}</p>
					</Link>
				</span>
				{props.coins.current_price <= 1 ? (
					<p>
						<Link to={`/coin/${props.coins.id}`} element={<Coin />}>
							${props.coins.current_price}
						</Link>
					</p>
				) : (
					<p>
						<Link to={`/coin/${props.coins.id}`} element={<Coin />}>
							${props.coins.current_price.toLocaleString()}
						</Link>
					</p>
				)}

				{props.coins.price_change_percentage_24h ? (
					<p className={props.coins.price_change_percentage_24h > 0 ? "positive" : "negative"}>
						{props.coins.price_change_percentage_24h
							? props.coins.price_change_percentage_24h.toFixed(2)
							: null}
						%
					</p>
				) : (
					"?"
				)}
				<p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
				<p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
				<p className='hide-mobile supply-text'>
					<Link to={`/coin/${props.coins.id}`} element={<Coin />}>
						{props.coins.circulating_supply.toLocaleString()} {props.coins.symbol}
					</Link>
				</p>
				{props.coins.ath_change_percentage > 0 ? (
					<p className='positive hide-mobile'>{props.coins.ath_change_percentage.toFixed(2)}%</p>
				) : (
					<p className='negative hide-mobile'>{props.coins.ath_change_percentage.toFixed(2)}%</p>
				)}
			</div>
		</>
	);
};

export default Listofcoins;
