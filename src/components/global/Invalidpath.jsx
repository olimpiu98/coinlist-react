import React from "react";
import { useLocation } from "react-router-dom";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { Link } from "react-router-dom";

const Invalidpath = () => {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<div>
			<div>
				<div className='flex items-center justify-center h-screen '>
					<div className='container'>
						<div className='border border-[#7b83d64f] rounded-lg shadow-lg p-5 md:p-10 mx-2'>
							<div className='text-center'>
								<h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-300 sm:text-5xl sm:leading-none md:text-6xl'>
									Invalid path <span className='text-[#777fd9] text-lg'>{location.pathname}</span>
								</h2>
								<p className='text-md md:text-xl mt-10'>Shhhh.... this is a dead road.</p>
								<p className='text-md md:text-xl'>
									Go back to{" "}
									<Link to='/'>
										<span className='underline hover:text-[#777fd9]'>Dashboard</span>
									</Link>
								</p>
							</div>
							<div className='flex flex-wrap mt-10 justify-center'>
								<div className='m-3 '>
									<Link to='/' title='main page'>
										<TbMoodCrazyHappy className='animate-bounce delay-100 duration-300 text-9xl font-bold text-[#ff3f14c2]' />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Invalidpath;
