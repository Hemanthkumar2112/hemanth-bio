import React from "react";
import { Routes, Route ,Navigate } from "react-router-dom";
import Cookies from "js-cookie";


const PortFolioRoutes = () => {

    

    if(Cookies.get(import.meta.env.VITE_APP_USER_COOKIE_KEY_NAME) === undefined){
        window.location.href = import.meta.env.VITE_APP_LOGIN_URL;
    }

    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<App  />} />
                {/* <Route exact path="/mine" element={<App />} />
                <Route exact path="/blog" element={<App />} />
                <Route exact path="/contact" element={<App />} /> */}
                <Route path="/*"  element={ <Navigate  to="/" /> }/>
            </Routes>
        </React.Fragment>
    )
}

export default PortFolioRoutes;
