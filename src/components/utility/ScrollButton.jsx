import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "react-daisyui";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 150) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<div
			className='fixed bottom-10 right-10 border border-[#777fd92b] rounded-lg'
			onClick={scrollToTop}
			style={{ display: visible ? "inline" : "none" }}
		>
			<Button>
				<FaArrowCircleUp className='text-[#777fd9]' />
			</Button>
		</div>
	);
};

export default ScrollButton;
