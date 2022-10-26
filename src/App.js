import "./App.css";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import AuthProvider from "./AuthContext";
import MainDiv from "./components/MainDiv";
import Auth from "./components/Auth";
import LogIn from "./components/LogIn";
import PrivateRoute from "./components/PrivateRoute";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostQuestion from "./components/PostQuestion";
import ShowQuestion from "./components/showQuestion";
import Tags from "./components/Tags";
function App() {
	return (
		<Router>
			<AuthProvider>
				<div className="App">
					<LeftBar />
					<Header />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<PrivateRoute>
									<MainDiv />
								</PrivateRoute>
							}
						/>
						<Route path="/signup" element={<Auth />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/users" element={<Users />} />
						<Route path="/tags" element={<Tags />} />
						<Route
							path="/question/:title"
							element={<ShowQuestion />}
						/>

						<Route
							path="/postquestion"
							element={
								<PrivateRoute>
									<PostQuestion />
								</PrivateRoute>
							}
						/>
					</Routes>
				</div>
			</AuthProvider>
		</Router>
	);
}

export default App;
