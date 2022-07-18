import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./app/screens/Home";
import About from "./app/screens/About";
import Services from "./app/screens/Services";
import Blog from "./app/screens/Blog";
import Contact from "./app/screens/Contact";
import Personal from "./app/screens/Personal";
// import SignIn from "./app/screens/SignIn";
import LogIn from "./app/screens/LogIn";
import NotFound from "./app/screens/NotFound";
import Report from "./app/screens/Report";

import Navbar from "./app/components/Navbar";
import NavbarSystem from "./app/components/NavbarSystem";
import Footer from "./app/components/Footer";

import UserLayoutInput from "./app/components/UserLayoutInput"
import LayoutTableUsers from "./app/components/TableUserLayout";
import LayoutTableBlog from "./app/components/TableBlogLayout";
import LayoutTableAssignament from "./app/components/TableAssignamentLayout";
import UserLayout from "./app/components/UserLayout";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					exact={true}
					element={
						<>
							{" "}
							<Navbar /> <Home /> <Footer />
						</>
					}
				/>
				<Route
					path="/about"
					element={
						<>
							{" "}
							<Navbar /> <About /> <Footer />
						</>
					}
				/>
				<Route
					path="/services"
					element={
						<>
							{" "}
							<Navbar /> <Services /> <Footer />
						</>
					}
				/>
				<Route
					path="/blog"
					element={
						<>
							{" "}
							<Navbar /> <Blog /> <Footer />
						</>
					}
				/>
				<Route
					path="/contact"
					element={
						<>
							{" "}
							<Navbar /> <Contact /> <Footer />
						</>
					}
				/>
				<Route
					path="/personal"
					element={
						<>
							{" "}
							<Navbar /> <Personal /> <Footer />
						</>
					}
				/>
				<Route
					path="/signIn"
					element={
						<>
							{" "}
							<Navbar /> <UserLayoutInput /> <Footer />
						</>
					}
				/>
				<Route
					path="/logIn"
					element={
						<>
							{" "}
							<LogIn />
						</>
					}
				/>
				<Route
					path="/tableUsers"
					element={
						<>
							{" "}
							<NavbarSystem /> <LayoutTableUsers />
						</>
					}
				/>
				<Route
					path="/users"
					element={
						<>
							{" "}
							<NavbarSystem /> <UserLayout />
						</>
					}
				/>
				<Route
					path="/tableAssignament"
					element={
						<>
							{" "}
							<NavbarSystem /> <LayoutTableAssignament />
						</>
					}
				/>
				<Route
					path="/tableBlog"
					element={
						<>
							{" "}
							<NavbarSystem /> <LayoutTableBlog />
						</>
					}
				/>

				<Route
					path="/report"
					element={
						<>
							{" "}
							<NavbarSystem /> <Report />
						</>
					}
				/>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
