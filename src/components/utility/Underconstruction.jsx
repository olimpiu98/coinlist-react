import React from "react";
import Styles from "../Styles";
import { IoMdConstruct } from "react-icons/io";

const Underconstruction = () => {
	return (
		<div>
			<div>
				<div className={Styles.uc.content}>
					<div className='container'>
						<div className={Styles.uc.border}>
							<div className='text-center'>
								<h2 className={Styles.uc.mainText}>Under construction</h2>
								<p className='text-md md:text-xl mt-10'>
									Hmmmm.... We are now sleeping and dreaming about new features to implement.
								</p>
								<p className='text-md md:text-xl'> Will be back soon.</p>
							</div>
							<div className='flex flex-wrap mt-10 justify-center'>
								<div className='m-3 '>
									<IoMdConstruct className={Styles.uc.icon} />
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
