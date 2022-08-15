// import React from "react";
// import { Pagination, Button } from "react-daisyui";

// const Paginationlist = ({ coinsPerPage, totalCoinsPerPage, paginate }) => {
// 	const pageNumberLocal = [];
// 	for (let i = 1; i <= Math.ceil(totalCoinsPerPage / coinsPerPage); i++) {
// 		pageNumberLocal.push(i);
// 	}
// 	return (
// 		<Pagination className='flex justify-center pt-3'>
// 			{pageNumberLocal.map((number) => (
// 				<Button
// 					onClick={() => {
// 						paginate(number);
// 						window.scrollTo(0, 0);
// 					}}
// 					key={number}
// 				>
// 					{number}
// 				</Button>
// 			))}
// 		</Pagination>
// 	);
// };

// export default Paginationlist;
