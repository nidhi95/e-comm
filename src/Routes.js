import React from "react";
import CartPage from "pages/CartPage";
import LoginFlowOTP from "pages/LoginFlowOTP";
import LoginFlowMobile from "pages/LoginFlowMobile";
import ProductDetailsPageProductdescription from "pages/ProductDetailsPageProductdescription";
import DesktopThree from "pages/DesktopThree";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktopthree" element={<DesktopThree />} />
        <Route
          path="/productdetailspageproductdescription"
          element={<ProductDetailsPageProductdescription />}
        />
        <Route path="/loginflowmobile" element={<LoginFlowMobile />} />
        <Route path="/loginflowotp" element={<LoginFlowOTP />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
