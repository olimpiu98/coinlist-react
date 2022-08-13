import React from "react";
import Exchangestable from "./Exchangestable";

const Listofexchanges = (props) => {
	return (
		<div className='container'>
			<div>
				<div className='heading'>
					<p>#</p>
					<p>Name</p>
					<p>Webiste</p>
					<p>From</p>
					<p className='hide-mobile'>Launch date</p>
					<p className='hide-mobile'>Volume 24h</p>
					<p className='hide-mobile'>Trust score</p>
				</div>
				{props.exchanges.map((exchanges) => {
					return <Exchangestable exchanges={exchanges} key={exchanges.id} />;
				})}
			</div>
		</div>
	);
};

export default Listofexchanges;
