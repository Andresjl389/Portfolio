import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "../../ui/screens";


const AppRouter:React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;