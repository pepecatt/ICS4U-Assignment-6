import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import MovieView from "./views/MovieView";
import GenreView from "./views/GenreView";
import DetailedView from "./views/DetailedView";
import { StoreProvider } from './context';
import './App.css';

function App() {

	return (
		<StoreProvider>
			<BrowserRouter>
				<Routes>
					<Route path="" element={<HomeView />} />
					<Route path="/register" element={<RegisterView />} />
					<Route path="/login" element={<LoginView />} />
					<Route path="/movies" element={<MovieView />} >
						<Route path="genre/:id" element={<GenreView />} />
						<Route path="details/:id" element={<DetailedView />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</StoreProvider>
	)
}

export default App
