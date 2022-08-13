import React from "react";

import { IoMdConstruct } from "react-icons/io";

const Underconstruction = () => {
	return (
		<div>
			<div>
				<div className='flex items-center justify-center h-screen '>
					<div className='container'>
						<div className='border border-[#7b83d64f] rounded-lg shadow-lg p-5 md:p-10 mx-2'>
							<div className='text-center'>
								<h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-300 sm:text-5xl sm:leading-none md:text-6xl'>
									Under construction <span className='text-[#777fd9] text-base'>page</span>
								</h2>
								<p className='text-md md:text-xl mt-10'>
									Hmmmm.... We are now sleeping and dreaming about new features to implement.
								</p>
								<p className='text-md md:text-xl'> Will be back soon.</p>
							</div>
							<div className='flex flex-wrap mt-10 justify-center'>
								<div className='m-3 '>
									<a href='https://twitter.com/tic_oli' title='Olimpiu On Twitter'>
										<IoMdConstruct className='delay-100 duration-300 text-9xl font-bold hover:text-[#777fd9]' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Underconstruction;
