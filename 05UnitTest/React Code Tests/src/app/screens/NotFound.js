import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CenterConent } from "../components/styles/Styles";


const NotFound = () => {
  let location = useLocation();
  return (
    <>
        <CenterConent className="container">
            <div className="col text-center">
              <img src="https://img.freepik.com/premium-vector/website-page-found-error-oops-worried-robot-character-peeking-out-outer-space-site-crash_502272-1894.jpg?w=1380" 
              style={{width:"50%"}} alt="..."></img>
              {/* <img src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg?w=826&t=st=1658050096~exp=1658050696~hmac=452d4b618d1f01cfdfd71bd760579ee5d6d05aba210fa8255194e02a5f2771df" 
              style={{width:"35%"}} alt="..."></img> */}
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <h3>
                The page <code>{location.pathname}</code> be removed or temporarily unavailable
                </h3>
                <Link to="/">Go to HomePage</Link>
            </div>
        </CenterConent>
    </>
  );
};

export default NotFound;
