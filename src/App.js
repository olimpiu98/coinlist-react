import Dashboard from "./components/Dashboard";
import Navbar from "./components/global/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./components/coinsinfo/Coinpage";
import Footerpag from "./components/global/Footerpag";
import Projects from "./components/Projects";
import Calendar from "./components/Calendar";
import Exchanges from "./components/Exchanges";
import ScrollButton from "./components/utility/ScrollButton";
import Invalidpath from "./components/global/Invalidpath";

function App() {
	return (
		<>
			<ScrollButton />
			<div className='responsive'>
				<Navbar />
				<Routes>
					<Route path='/*' element={<Invalidpath />} />
					<Route path='/' element={<Dashboard />} />
					<Route path='/coin' element={<Coin />}>
						<Route path=':coinId' element={<Coin />} />
					</Route>
					<Route path='/exchanges' element={<Exchanges />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/calendar' element={<Calendar />} />
				</Routes>
			</div>
			<Footerpag />
		</>
	);
}

export default App;
