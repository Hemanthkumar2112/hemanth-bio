import React from "react";
import { Routes, Route ,Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "../screens/Home";
import YourComponent from "../screens/YourComponent";


const PortFolioRoutes = () => {



    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Home  />} />
                <Route exact path="/test" element={<YourComponent  />} />

                <Route path="/*"  element={ <Navigate  to="/" /> }/>
            </Routes>
        </React.Fragment>
    )
}

export default PortFolioRoutes;
