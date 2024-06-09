import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
function HomePage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;
