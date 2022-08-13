import React from "react";
import Listofcoins from "./Listofcoins";

const coins = (props) => {
	return (
		<div className='container'>
			<div>
				<div className='heading'>
					<p>#</p>
					<p>Coin</p>
					<p>Price</p>
					<p>24h</p>
					<p className='hide-mobile'>Volume</p>
					<p className='hide-mobile'>Mk. Cap</p>
					<p className='hide-mobile'>Supply</p>
					<p className='hide-mobile'>From ATH</p>
				</div>
				{props.coins.map((coins) => {
					return <Listofcoins coins={coins} key={coins.id} />;
				})}
			</div>
		</div>
	);
};

export default coins;
