import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Template from '../Components/Template/Template';
import Home from '../Components/Pages/Home/Home';
import Navbar from '../Components/Pages/Layout/Navbar';


const DefaultRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Navbar" element={<Navbar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default DefaultRouter;