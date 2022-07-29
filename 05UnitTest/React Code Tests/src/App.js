import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./app/screens/Home";
import About from "./app/screens/About";
import Services from "./app/screens/Services";
import Blog from "./app/screens/Blog";
import Contact from "./app/screens/Contact";
import Personal from "./app/screens/Personal";
import SignIn from "./app/screens/SignIn";
import LogIn from "./app/screens/LogIn";
import NotFound from "./app/screens/NotFound";

import Navbar from "./app/components/Navbar";
import Footer from "./app/components/Footer";
import LayoutTableUsers from "./app/components/LayoutTableUsers";




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
              <Navbar /> <SignIn /> <Footer />
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
              <LayoutTableUsers/>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
