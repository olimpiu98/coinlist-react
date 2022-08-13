import React from "react";
import { FaRoute } from "react-icons/fa";
import { Button } from "react-daisyui";

const Exchangestable = (props) => {
	return (
		<div className='coin-row'>
			<p>{props.exchanges.trust_score_rank}</p>
			<span className='img-symbol'>
				<img className='img-inlist' src={props.exchanges.image} alt='coin logo' />
				<p className='coin-name'>{props.exchanges.name}</p>
			</span>
			<div>
				<Button className='btn-sm' href={props.exchanges.url}>
					<FaRoute />
				</Button>
			</div>

			<p>{props.exchanges.country}</p>
			<p className='hide-mobile'>{props.exchanges.year_established}</p>
			<p className='hide-mobile'>
				{props.exchanges.trade_volume_24h_btc.toLocaleString()}
				<span className='text-[0.6rem] italic align-super'>BTC</span>
			</p>
			<p className='hide-mobile '>{props.exchanges.trust_score} of 10</p>
		</div>
	);
};

export default Exchangestable;
