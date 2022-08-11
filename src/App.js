import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./components/coinsinfo/Coinpage";
import Footerpag from "./components/Footerpag";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/coin' element={<Coin />}>
					<Route path=':coinId' element={<Coin />} />
				</Route>
			</Routes>
			<Footerpag />
		</>
	);
}

export default App;
