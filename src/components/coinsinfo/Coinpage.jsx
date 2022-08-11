import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Hero } from "react-daisyui";

const Coin = () => {
	const params = useParams();
	const [coin, setCoin] = useState({});
	const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setCoin(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [url]);

	return (
		<Hero>
			<Hero.Content>
				<img
					src='https://api.lorem.space/image/movie?w=260&h=400'
					className='max-w-sm rounded-lg shadow-2xl'
					alt={coin.id}
				/>
				<div>
					<h1 className='text-5xl font-bold'>{coin.id}</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
			</Hero.Content>
		</Hero>
	);
};

export default Coin;
